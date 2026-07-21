package com.tests;

import com.base.BaseTest;
import com.clients.AccountClient;
import com.clients.BookStoreClient;
import com.models.request.CreateUserRequest;
import com.models.request.GenerateTokenRequest;
import com.models.response.Book;
import com.models.response.BooksResponse;
import com.models.response.CreateUserResponse;
import com.models.response.GenerateTokenResponse;

import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import com.logger.logger;
import org.slf4j.Logger;

public class bookStoreTest extends BaseTest {

    private static final Logger log =
            logger.getLogger(AccountClient.class);
    private final AccountClient accountClient = new AccountClient();
    private final BookStoreClient bookStoreClient = new BookStoreClient();


    @Epic("Book Store API")
    @Feature("Managing USer")
    @Story("Create User")
    @Test
    @DisplayName("Verify the user creation, token generation " +
            "and retrieve books successfully")
    void verifyBookStoreFlow() {

        // Generate unique username
        log.info("Create a user");
        String username = "Salman" + System.currentTimeMillis();
        String password = "Password@123";

        // Create request objects
        CreateUserRequest user = new CreateUserRequest(username, password);

        log.info("Create a valid token");        GenerateTokenRequest token = new GenerateTokenRequest(username, password);

        CreateUserResponse userResponse = accountClient.createUser(user);

        log.info("Verifying data");
        assertNotNull(userResponse);
        assertNotNull(userResponse.userID());
        assertEquals(username, userResponse.username());

        System.out.println("User Created");
        System.out.println("UserID : " + userResponse.userID());


        //Get Token
        log.info("Get the token");
        GenerateTokenResponse tokenResponse = accountClient.generateToken(token);

        log.info("Validate the data");
        assertNotNull(tokenResponse);
        assertNotNull(tokenResponse.token());
        assertFalse(tokenResponse.token().isBlank());
        assertEquals("Success", tokenResponse.status());
        assertEquals(
                "User authorized successfully.",
                tokenResponse.result());


        //Get books using token
        log.info("Get the book response and valid the books");
        BooksResponse booksResponse = bookStoreClient.getBooks(tokenResponse.token());

        assertNotNull(booksResponse);
        assertNotNull(booksResponse.books());
        assertFalse(booksResponse.books().isEmpty());

        for (Book book : booksResponse.books()) {

            assertNotNull(book.isbn());
            assertNotNull(book.title());
            assertNotNull(book.author());

            System.out.println("ISBN : " + book.isbn());

            System.out.println("Title : " + book.title());

            System.out.println("Author : " + book.author());

            System.out.println("Sub-Title: "  + book.subTitle());
        }

    }

}