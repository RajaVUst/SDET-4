package specs;

import com.api.config.ApiConfig;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

import static io.restassured.filter.log.LogDetail.ALL;

public class SpecFactory {

    public static RequestSpecification requestSpec() {
        return new RequestSpecBuilder()
                .setBaseUri(ApiConfig.BASE_URL)
                .setContentType("application/json")
                .log(ALL)
                .build();
    }

    public static ResponseSpecification responseSpec() {
        return new ResponseSpecBuilder()
                .log(ALL)
                .build();
    }
}