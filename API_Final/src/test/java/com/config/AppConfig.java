package com.config;

import io.restassured.RestAssured;

public final class AppConfig {

    private AppConfig() {
    }

    public static void initialize() {

        RestAssured.baseURI = ConfigManager.getBaseUrl();

//        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();

    }

}
