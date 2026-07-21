package com.api.tests;

import com.api.base.BaseTest;
import com.api.flows.BookStoreFlow;
import com.api.testdata.TestData;
import org.junit.jupiter.api.Test;

public class BookStoreFlowTest extends BaseTest {

    private final BookStoreFlow bookStoreFlow = new BookStoreFlow();

    @Test
    void createUser_generateToken_andRetrieveBooks() {
        String username = TestData.uniqueUsername();
        String password = TestData.PASSWORD;

        bookStoreFlow.createUserGenerateTokenAndGetBooks(username, password);
    }
}