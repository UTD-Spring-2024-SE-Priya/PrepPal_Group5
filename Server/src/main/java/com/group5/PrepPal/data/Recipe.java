package com.group5.PrepPal.data;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "recipes")
@Data
@Builder
public class Recipe {
    @Id
    private String id;

    private String name;
    private String mealType;
    private String[] ingredients;
}

