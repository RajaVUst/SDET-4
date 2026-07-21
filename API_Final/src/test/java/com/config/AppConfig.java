package com.config;

public class AppConfig {

    private AppConfig(){}

    public static String getBaseUrl() {
        return Secrets.BASE_URL;
    }

}