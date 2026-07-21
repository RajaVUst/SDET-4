package com.api.flows;

import com.api.clients.AccountClient;
import com.api.clients.BookStoreClient;
import com.api.models.CreateUserRequest;
import com.api.models.GenerateTokenRequest;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;


public class BookStoreFlow {

    private static final Logger log = LoggerFactory.getLogger(BookStoreFlow.class);

    private final AccountClient accountClient = new AccountClient();
    private final BookStoreClient bookStoreClient = new BookStoreClient();

    public void createUserGenerateTokenAndGetBooks(String username, String password) {

        log.info("Creating user: " + username);
        Response createUserResponse = accountClient.createUser(new CreateUserRequest(username, password));

        log.info("Checking the user was created successfully");
        assertEquals(201, createUserResponse.statusCode());
        assertNotNull(createUserResponse.jsonPath().getString("userID"));
        assertEquals(username, createUserResponse.jsonPath().getString("username"));

        log.info("Generating a token for the user");
        Response tokenResponse = accountClient.generateToken(new GenerateTokenRequest(username, password));

        log.info("Checking the token was generated successfully");
        assertEquals(200, tokenResponse.statusCode());
        String token = tokenResponse.jsonPath().getString("token");
        assertNotNull(token);

        log.info("Getting the list of books using the token");
        Response booksResponse = bookStoreClient.getBooks(token);

        log.info("Checking the book list was returned successfully");
        assertEquals(200, booksResponse.statusCode());

        List<Map<String, Object>> books = booksResponse.jsonPath().getList("books");
        assertNotNull(books);
        assertFalse(books.isEmpty());

        log.info("Checking that every book has a title in the response");
        for (Map<String, Object> book : books) {
            String title = (String) book.get("title");
            assertNotNull(title, "Every book should have a title");
            assertFalse(title.isBlank(), "Book title should not be blank");
        }

        log.info("Flow completed: user created, token generated, books retrieved");
    }
}