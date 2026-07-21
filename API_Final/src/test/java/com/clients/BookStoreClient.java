package com.clients;

import com.base.BaseAPI;
import com.constants.Endpoints;
import com.models.response.Book;
import com.models.response.BooksResponse;
import com.specs.ResponseSpec;
import com.specs.RequestSpec;

import io.restassured.response.Response;

public class BookStoreClient extends BaseAPI {

    public BooksResponse getBooks(String token) {

        Response response = request()

                .spec(RequestSpec.bearerRequest(token))
                .when()
                .get(Endpoints.BOOKS)
                .then()
                .spec(ResponseSpec.success200())
                .extract()
                .response();

        return response.as(BooksResponse.class);

    }




}