package com.base;

import com.specs.RequestSpec;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BaseAPI {

    protected Response get(String endpoint) {

        return given()
                .spec(RequestSpec)
                .when()
                .get(endpoint);
    }

}
