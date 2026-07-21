package tests;

import base.BaseTest;
import config.Config;
import endpoints.AccountAPI;
import endpoints.BookStoreAPI;
import io.restassured.response.Response;
import models.BooksResponse;
import models.TokenRequest;
import models.TokenResponse;
import models.UserRequest;
import models.UserResponse;
import org.junit.jupiter.api.Test;
import utils.RandomDataGenerator;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.junit.jupiter.api.Assertions.*;

public class FlowTest extends BaseTest {

    @Test
    void createUserGenerateTokenGetBooks() {

        String username = RandomDataGenerator.randomUsername();
        String password = Config.get("password");
        UserRequest request = new UserRequest(username,password);
        Response createResponse = AccountAPI.createUser(request);
        assertEquals(201,createResponse.statusCode());
        createResponse.then()
                .assertThat()
                .body(matchesJsonSchemaInClasspath("schema/user-schema.json"));
        System.out.println("Status Code: " + createResponse.statusCode());
        System.out.println("Response:");
        createResponse.prettyPrint();
        UserResponse user = createResponse.as(UserResponse.class);
        assertNotNull(user.getUserID());
        assertEquals(username,user.getUsername());

        TokenRequest tokenRequest = new TokenRequest(username,password);
        Response tokenResponse = AccountAPI.generateToken(tokenRequest);
        assertEquals(200,tokenResponse.statusCode());
        tokenResponse.then()
                .assertThat()
                .body(matchesJsonSchemaInClasspath("schema/token-schema.json"));
        TokenResponse token = tokenResponse.as(TokenResponse.class);
        assertNotNull(token.getToken());
        assertFalse(token.getToken().isEmpty());

        Response booksResponse = BookStoreAPI.getBooks(token.getToken());
        assertEquals(200,booksResponse.statusCode());
        booksResponse.then()
                .assertThat()
                .body(matchesJsonSchemaInClasspath("schema/books-schema.json"));
        BooksResponse books = booksResponse.as(BooksResponse.class);
        assertNotNull(books.getBooks());
        assertFalse(books.getBooks().isEmpty());



        books.getBooks().forEach(book->{
            assertNotNull(book.getTitle());
            assertNotNull(book.getAuthor());
            assertNotNull(book.getIsbn());
            assertNotNull(book.getPublisher());
        });

    }

}