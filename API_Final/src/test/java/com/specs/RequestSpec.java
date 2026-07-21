package com.specs;


import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import com.config.ConfigManager;
//import com.utils.TokenManager;

public final class RequestSpec {

    private RequestSpec() {}

    public static RequestSpecification requestSpec() {

        return new RequestSpecBuilder()
                .setBaseUri(ConfigManager.getBaseUrl())
                .addFilter(new AllureRestAssured())
                .setContentType(ContentType.JSON)
                .build();
    }

    public static RequestSpecification successOK() {

        return new RequestSpecBuilder()
                .setBaseUri(ConfigManager.getBaseUrl())
                .setAccept(ContentType.JSON)
                .setContentType(ContentType.JSON)
//                .addHeader("Authorization",
//                        "Bearer " + TokenManager.getToken())
                .build();
    }

}