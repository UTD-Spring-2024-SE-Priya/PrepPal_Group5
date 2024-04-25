package com.group5.PrepPal.service;

import com.group5.PrepPal.data.Recipe;
import com.group5.PrepPal.data.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Random;
import java.util.Arrays;


@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private RestTemplate restTemplate;

    public void saveRecipe(Recipe recipe)
    {
        if(recipe != null)
        {
            recipeRepository.save(recipe);
        }
    }

//    public void saveRecipeFromExternalAPI() {
//        // Make HTTP request to external API
//        ResponseEntity<Recipe.java> responseEntity = restTemplate.exchange(
//                "https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=d8b8f77e&app_key=%20%208a3cd3806d967e3216fe9a8824b61cfc&diet=balanced&random=true",
//                HttpMethod.GET,
//                null,
//                Recipe.java.class
//        );
//        // Extract recipe data from API response
//        Recipe.java recipe = responseEntity.getBody();
//        // Save recipe to MongoDB
//        saveRecipe(recipe);
//    }


    public Iterable<Recipe> getAllRecipes() {
        return this.recipeRepository.findAll();
    }

    public void deleteRecipe(String id) {
        recipeRepository.deleteById(id);
    }

    public Recipe getRecipeByID(String recipeID) {
        return recipeRepository.findById(recipeID).get();
    }
    public Recipe getRecipeByName(String recipeID) {
        return recipeRepository.findById(recipeID).get();
    }

    public String[] randomRecipe() {
        ArrayList<Recipe> temp = (ArrayList<Recipe>) recipeRepository.findAll();
        Random rand = new Random();
        String [] a= new String[3];
        a[0] = temp.get(rand.nextInt(temp.size())).getName();
        a[1] = temp.get(rand.nextInt(temp.size())).getName();
        a[2] = temp.get(rand.nextInt(temp.size())).getName();
        return a;
    }
}
