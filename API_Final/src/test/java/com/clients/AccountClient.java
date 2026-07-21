package com.clients;

import com.base.BaseAPI;
import com.constants.Endpoints;
import com.models.request.CreateUserRequest;
import com.models.request.GenerateTokenRequest;
import com.models.response.CreateUserResponse;
import com.models.response.GenerateTokenResponse;
import com.specs.RequestSpec;
import com.specs.ResponseSpec;

import io.restassured.response.Response;

public class AccountClient extends BaseAPI {

    public CreateUserResponse createUser(CreateUserRequest request){
        Response response = request()
                .spec(RequestSpec.requestSpec())
                .body(request)
                .when()
                .post(Endpoints.CREATE_USER)
                .then()
                .spec(ResponseSpec.success201())
                .extract()
                .response();

        System.out.println(response.asPrettyString());
        return response.as(CreateUserResponse.class);
    }

    public GenerateTokenResponse generateToken(GenerateTokenRequest requestBody) {

        Response response = request()
                .spec(RequestSpec.requestSpec())
                .body(requestBody)
                .when()
                .post(Endpoints.GENERATE_TOKEN)
                .then()
                .spec(ResponseSpec.success200())
                .extract()
                .response();

        System.out.println(response.asPrettyString());
        return response.as(GenerateTokenResponse.class);

    }

}
