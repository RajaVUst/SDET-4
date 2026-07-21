package tests;

import base.BaseTest;
import config.Config;
import endpoints.AccountAPI;
import endpoints.BookStoreAPI;
import io.restassured.response.Response;
import models.TokenRequest;
import models.UserRequest;
import org.junit.jupiter.api.Test;
import utils.RandomDataGenerator;

import static org.junit.jupiter.api.Assertions.*;

public class NegativeFlowTest extends BaseTest {

    private final String password = Config.get("password");

    @Test
    void shouldNotCreateDuplicateUser() {

        String username = RandomDataGenerator.randomUsername();
        UserRequest request = new UserRequest(username, password);
        Response firstResponse = AccountAPI.createUser(request);
        assertEquals(201, firstResponse.statusCode());
        Response secondResponse = AccountAPI.createUser(request);
        assertEquals(406, secondResponse.statusCode());
        secondResponse.prettyPrint();
        assertTrue(secondResponse.asString().contains("User exists"));
    }

    @Test
    void shouldRejectWeakPassword() {

        UserRequest request = new UserRequest(
                RandomDataGenerator.randomUsername(),
                "abc123"
        );
        Response response = AccountAPI.createUser(request);
        assertEquals(400, response.statusCode());
        response.prettyPrint();
        assertTrue(response.asString().contains("Passwords must have"));
    }

    @Test
    void shouldRejectEmptyUsername() {

        UserRequest request = new UserRequest("", password);
        Response response = AccountAPI.createUser(request);
        assertEquals(400, response.statusCode());
        response.prettyPrint();
    }
    @Test
    void shouldNotGenerateTokenForWrongPassword() {

        String username = RandomDataGenerator.randomUsername();
        UserRequest request = new UserRequest(username,password);
        Response createResponse = AccountAPI.createUser(request);
        assertEquals(201,createResponse.statusCode());
        TokenRequest tokenRequest = new TokenRequest(
                username, "WrongPassword@123");
        Response tokenResponse = AccountAPI.generateToken(tokenRequest);
        assertEquals(200,tokenResponse.statusCode());
        tokenResponse.prettyPrint();
        assertTrue(tokenResponse.asString().contains("Failed"));

    }

}