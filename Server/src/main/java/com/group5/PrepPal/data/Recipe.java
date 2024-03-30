package com.group5.PrepPal.data;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;
import java.util.regex.Pattern;

import java.util.Objects;


@Document(collection = "recipes")
@Data
@Builder
public class Recipe {
    @Id
    private String id;

    private String name;
    private String mealType;
    private String[] ingredients;


    public Recipe(String id, String name, String mealType, String[] ingredients)
    {
        this.id = id;
        if(checkName(name)) {
            this.name = name;
        }
        if(checkMealType(mealType)) {
            this.mealType = mealType;
        }
        if(checkIngredients(ingredients)) {
            this.ingredients = ingredients;
        }
        if(!Objects.equals(this.id, id) || !Objects.equals(this.name, name) || !Objects.equals(this.mealType, mealType) || !Arrays.equals(this.ingredients, ingredients)) {

            this.id = this.name = this.mealType= null;
            this.ingredients = null;
        }
    }

    public boolean checkName(String x)
    {
        return x != null && !x.isEmpty() && !x.matches("^[0-9]+$");
    }

    public boolean checkMealType(String x)
    {
        return x != null && (x.equalsIgnoreCase("breakfast") || x.equalsIgnoreCase("lunch") || x.equalsIgnoreCase("dinner"));
    }
    public boolean checkIngredients(String[] x)
    {
        if (x != null && x.length >= 2) {
            int countNonEmpty = 0;
            for (String str : x) {
                // Check if the individual ingredients is not empty
                if (str != null && !str.trim().isEmpty()) {
                    countNonEmpty++;
                }
            }
            // Check if there are at least 2 non-empty strings
            return countNonEmpty >= 2;
        }
        return false;
    }
}

