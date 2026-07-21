package tests;

import base.BaseTest;
import io.qameta.allure.*;
import io.restassured.response.Response;
import models.CreateUserRequest;
import models.GenerateTokenRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import specs.SpecFactory;
import java.util.UUID;
import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.junit.jupiter.api.Assertions.*;
import static utils.EndPoints.*;

public class BookStoreApiTest extends BaseTest {
    @Test
    @DisplayName("Scenario")
    void verifyBookStoreFlow() {
        String username = "user" + UUID.randomUUID().toString().replace("-", "").substring(0, 8);
        String password = "Password@123";
        Response createResponse =
                given()
                        .spec(SpecFactory.requestSpec())
                        .body(new CreateUserRequest(username, password))
                        .when()
                        .post(CREATE_USER)
                        .then()
                        .spec(SpecFactory.responseSpec(203))
                        .body(matchesJsonSchemaInClasspath("schemas/create_user.json"))
                        .extract()
                        .response();
        String userId = createResponse.jsonPath().getString("userID");
        String createdUsername = createResponse.jsonPath().getString("username");
        assertNotNull(userId);
        assertEquals(username, createdUsername);
        Response tokenResponse =
                given()
                        .spec(SpecFactory.requestSpec())
                        .body(new GenerateTokenRequest(username, password))
                        .when()
                        .post(GENERATE_TOKEN)
                        .then()
                        .spec(SpecFactory.responseSpec(200))
                        .body(matchesJsonSchemaInClasspath("schemas/generated_token.json"))
                        .extract()
                        .response();
        String token = tokenResponse.jsonPath().getString("token");
        assertNotNull(token);
        assertFalse(token.isBlank());
        Response booksResponse =
                given()
                        .spec(SpecFactory.requestSpec())
                        .header("Authorization", "Bearer " + token)
                        .when()
                        .get(GET_BOOKS)
                        .then()
                        .spec(SpecFactory.responseSpec(200))
                        .body(matchesJsonSchemaInClasspath("schemas/books-schema.json"))
                        .extract()
                        .response();
        assertFalse(booksResponse.jsonPath().getList("books").isEmpty());
        assertNotNull(booksResponse.jsonPath().getString("books[0].title"));
    }
}