package com.facotry;
import com.models.request.CreateUserRequest;
import com.models.request.GenerateTokenRequest;

public class Userfactory {

    private Userfactory(){}

    public static CreateUserRequest validUser(){

        String username =
                "User" + System.currentTimeMillis();

        return new CreateUserRequest(
                username,
                "Password@123"
        );

    }

}