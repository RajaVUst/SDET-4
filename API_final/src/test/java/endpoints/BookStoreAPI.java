package endpoints;

import io.restassured.response.Response;
import spec.SpecFactory;

import static io.restassured.RestAssured.given;

public class BookStoreAPI {

    private static final String GET_BOOKS="/BookStore/v1/Books";

    public static Response getBooks(String token){

        return given()

                .spec(SpecFactory.requestSpec())

                .header("Authorization","Bearer "+token)

                .when()

                .get(GET_BOOKS)

                .then()

                .spec(SpecFactory.successResponse())

                .extract()

                .response();

    }
    public static Response getBooksWithoutToken(){

        return given()

                .spec(SpecFactory.requestSpec())

                .when()

                .get(GET_BOOKS)

                .then()

                .extract()

                .response();

    }

}