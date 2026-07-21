package com.specs;

import com.config.ConfigManager;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.ResponseSpecification;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.lessThan;

public class ResponseSpec {
    public static ResponseSpecification success200() {

        return new ResponseSpecBuilder()

                .expectStatusCode(200)
                .expectContentType(ContentType.JSON)
                .expectResponseTime(lessThan(5000L))
                .expectHeader(
                        "Content-Type",
                        containsString("application/json")
                )
                .build();

    }

    public static ResponseSpecification success201() {

        return new ResponseSpecBuilder()
                .expectStatusCode(201)
                .expectContentType(ContentType.JSON)
                .build();

    }

}
