package com.specs;

import com.config.ConfigManager;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.ResponseSpecification

import static org.hamcrest.Matchers.lessThan;

public class ResponseSpec {
    public static ResponseSpecification successOK() {

        return new ResponseSpecBuilder()
                .expectStatusCode(200)
                .expectContentType(ContentType.JSON)
                .expectResponseTime()
//                .addHeader("Authorization",
//                        "Bearer " + TokenManager.getToken())
                .build();
    }
}
