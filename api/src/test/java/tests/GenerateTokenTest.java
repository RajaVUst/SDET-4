package tests;

import base.BaseTest;
import endpoints.Endpoints;
import models.GenerateTokenRequest;
import models.TokenResponse;
import org.junit.jupiter.api.Test;
import utils.ConfigReader;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.junit.jupiter.api.Assertions.*;

public class GenerateTokenTest extends BaseTest {

    @Test
    void generateTokenTest() {

        GenerateTokenRequest request = new GenerateTokenRequest(
                ConfigReader.getUsername(),
                ConfigReader.getPassword()
        );

        TokenResponse response = given()
                .body(request)
                .when()
                .post(Endpoints.GENERATE_TOKEN)
                .then()
                .spec(base.ResponseSpec.success200())
                .body(matchesJsonSchemaInClasspath("schemas/tokenSchema.json"))
                .extract()
                .as(TokenResponse.class);

        assertNotNull(response.getToken());
        assertEquals("Success", response.getStatus());
        assertTrue(response.getResult().contains("authorized"));
        assertNotNull(response.getExpires());
    }
}