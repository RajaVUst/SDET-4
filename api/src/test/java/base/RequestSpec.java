package base;

import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;
import io.restassured.http.ContentType;
import utils.ConfigReader;

public class RequestSpec {

    private static RequestSpecification requestSpec;

    public static RequestSpecification getRequestSpec() {

        if (requestSpec == null) {

            requestSpec = new RequestSpecBuilder()
                    .setBaseUri(ConfigReader.getBaseUrl())
                    .setContentType(ContentType.JSON)
                    .addFilter(new AllureRestAssured())
                    .build();
        }

        return requestSpec;
    }
}