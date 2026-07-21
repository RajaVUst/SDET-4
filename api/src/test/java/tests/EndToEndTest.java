package tests;

import base.BaseTest;
import endpoints.Endpoints;
import models.GenerateTokenRequest;
import models.TokenResponse;
import org.junit.jupiter.api.Test;
import utils.ConfigReader;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.*;

public class EndToEndTest extends BaseTest {

    @Test
    void endToEndFlow() {

        GenerateTokenRequest request = new GenerateTokenRequest(
                ConfigReader.getUsername(),
                ConfigReader.getPassword()
        );

        TokenResponse token = given()
                .body(request)
                .when()
                .post(Endpoints.GENERATE_TOKEN)
                .then()
                .spec(base.ResponseSpec.success200())
                .extract()
                .as(TokenResponse.class);

        assertNotNull(token.getToken());

        given()
                .header("Authorization", "Bearer " + token.getToken())
                .when()
                .get(Endpoints.GET_BOOKS)
                .then()
                .statusCode(200);
    }
}