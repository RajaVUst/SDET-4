package com.base;

import com.config.ConfigManager;
import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;

public class BaseAPI {

    protected RequestSpecification request() {

        RestAssured.baseURI = ConfigManager.baseUrl();

        return RestAssured
                .given()
                .log()
                .all();

    }

}