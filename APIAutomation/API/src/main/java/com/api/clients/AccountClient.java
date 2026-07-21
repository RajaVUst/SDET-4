package com.api.clients;

import com.api.models.CreateUserRequest;
import com.api.models.GenerateTokenRequest;

import io.restassured.response.Response;
import specs.SpecFactory;

import static io.restassured.RestAssured.given;

public class AccountClient {
    public Response createUser(CreateUserRequest request) {
        return given()
                .spec(SpecFactory.requestSpec())
                .body(request)
                .when()
                .post("/Account/v1/User")
                .then()
                .spec(SpecFactory.responseSpec())
                .extract()
                .response();
    }

    public Response generateToken(GenerateTokenRequest request) {
        return given()
                .spec(SpecFactory.requestSpec())
                .body(request)
                .when()
                .post("/Account/v1/GenerateToken")
                .then()
                .spec(SpecFactory.responseSpec())
                .extract()
                .response();
    }
}