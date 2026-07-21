package com.config;

public final class ConfigManager {

    private ConfigManager() {}

    public static String getBaseUrl() {
        return Secrets.BASE_URL;
    }

    public static String getEmail() {
        return Secrets.EMAIL;
    }

    public static String getPassword() {
        return Secrets.PASSWORD;
    }

}
