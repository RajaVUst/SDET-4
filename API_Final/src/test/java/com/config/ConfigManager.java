package com.config;

public class ConfigManager {

    private ConfigManager(){}

    public static String baseUrl() {
        return AppConfig.getBaseUrl();
    }

}