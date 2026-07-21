package com.models.response;

public record GenerateTokenResponse(

        String token,
        String expires,
        String status,
        String result

) {}