package tests;

import base.BaseTest;
import endpoints.Endpoints;
import io.restassured.response.Response;
import models.CreateUserRequest;
import models.CreateUserResponse;
import org.junit.jupiter.api.Test;
import utils.ConfigReader;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.junit.jupiter.api.Assertions.*;

public class CreateUserTest extends BaseTest {
    @Test
    void createUserTest() {

        CreateUserRequest request = new CreateUserRequest(
                ConfigReader.getUsername(),
                ConfigReader.getPassword()
        );

        Response response = given()
                .body(request)
                .when()
                .post(Endpoints.CREATE_USER);

        if (response.statusCode() == 201) {

            response.then()
                    .body(matchesJsonSchemaInClasspath("schemas/createUserSchema.json"));

            CreateUserResponse createUser =
                    response.as(CreateUserResponse.class);

            assertNotNull(createUser.getUserID());
            assertEquals(ConfigReader.getUsername(), createUser.getUsername());
            assertNotNull(createUser.getBooks());

        } else if (response.statusCode() == 406) {

            assertEquals("User exists!",
                    response.jsonPath().getString("message"));

        } else {

            fail("Unexpected status code: " + response.statusCode());

        }
    }
}