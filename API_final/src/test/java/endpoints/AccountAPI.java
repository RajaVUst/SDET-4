package endpoints;

import io.restassured.response.Response;
import models.TokenRequest;
import models.UserRequest;
import spec.SpecFactory;

import static io.restassured.RestAssured.given;

public class AccountAPI {

    private static final String CREATE_USER="/Account/v1/User";

    private static final String GENERATE_TOKEN="/Account/v1/GenerateToken";

    public static Response createUser(UserRequest request){

        return given()

                .spec(SpecFactory.requestSpec())

                .body(request)

                .when()

                .post(CREATE_USER)

                .then()

                .spec(SpecFactory.successResponse())

                .extract()

                .response();

    }

    public static Response generateToken(TokenRequest request){

        return given()

                .spec(SpecFactory.requestSpec())

                .body(request)

                .when()

                .post(GENERATE_TOKEN)

                .then()

                .spec(SpecFactory.successResponse())

                .extract()

                .response();

    }

}