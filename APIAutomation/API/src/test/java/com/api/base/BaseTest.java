package com.api.base;

import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeAll;

public class BaseTest {

    @BeforeAll
    static void setupAllureLogging() {
        RestAssured.filters(new AllureRestAssured());
    }
}