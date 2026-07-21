package com.api.testdata;

import java.util.UUID;

public class TestData {

    public static final String PASSWORD = "Password@123";
    public static String uniqueUsername() {
        return "user_" + UUID.randomUUID().toString().substring(0, 8);
    }
}