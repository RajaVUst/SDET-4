package com.config;

import io.github.cdimascio.dotenv.Dotenv;

public class Secrets {
    private static final Dotenv dotenv = Dotenv.configure()
                    .ignoreIfMalformed()
                    .ignoreIfMissing()
                    .load();

    private Secrets(){

    }

    public static final String BASE_URL = dotenv.get("BASE_URL");

    public static final String EMAIL = dotenv.get("EMAIL");

    public static final String PASSWORD = dotenv.get("PASSWORD");


}
