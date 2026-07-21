package com.api.clients;


import io.restassured.response.Response;
import specs.SpecFactory;

import static io.restassured.RestAssured.given;

public class BookStoreClient {

    public Response getBooks(String token) {
        return given()
                .spec(SpecFactory.requestSpec())
                .header("Authorization", "Bearer " + token)
                .when()
                .get("/BookStore/v1/Books")
                .then()
                .spec(SpecFactory.responseSpec())
                .extract()
                .response();
    }
}