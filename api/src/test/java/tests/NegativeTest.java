package tests;

import base.BaseTest;
import endpoints.Endpoints;
import models.GenerateTokenRequest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

public class NegativeTest extends BaseTest {

    @Test
    void invalidPassword() {

        GenerateTokenRequest request =
                new GenerateTokenRequest("lahari", "Wrong@123");

        given()
                .body(request)
                .when()
                .post(Endpoints.GENERATE_TOKEN)
                .then()
                .statusCode(200);
    }

    @Test
    void emptyRequestBody() {

        given()
                .when()
                .post(Endpoints.GENERATE_TOKEN)
                .then()
                .statusCode(400);
    }
}