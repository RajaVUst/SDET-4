package tests;

import base.BaseTest;
import endpoints.Endpoints;
import models.BooksResponse;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.junit.jupiter.api.Assertions.*;

public class GetBooksTest extends BaseTest {

    @Test
    void getBooksTest() {

        BooksResponse response = given()
                .when()
                .get(Endpoints.GET_BOOKS)
                .then()
                .spec(base.ResponseSpec.success200())
                .body(matchesJsonSchemaInClasspath("schemas/booksSchema.json"))
                .extract()
                .as(BooksResponse.class);

        assertFalse(response.getBooks().isEmpty());

        assertNotNull(response.getBooks().getFirst().getIsbn());
        assertNotNull(response.getBooks().getFirst().getTitle());
        assertNotNull(response.getBooks().getFirst().getAuthor());
        assertNotNull(response.getBooks().getFirst().getPublisher());
    }
}