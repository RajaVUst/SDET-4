package com.models.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record Book(

        String isbn,
        String title,
        String subTitle,
        String author,
        @JsonProperty("publish_date")
        String publishDate,
        String publisher,
        int pages,
        String description,
        String website

) {}