package com.group5.PrepPal.service;

import com.group5.PrepPal.data.Recipe;
import com.group5.PrepPal.data.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private RestTemplate restTemplate;

    public void save(Recipe recipe)
    {
        recipeRepository.save(recipe);
    }

//    public void saveRecipeFromExternalAPI() {
//        // Make HTTP request to external API
//        ResponseEntity<Recipe> responseEntity = restTemplate.exchange(
//                "https://api.example.com/recipes",
//                HttpMethod.GET,
//                null,
//                Recipe.class
//        );
//
//        // Extract recipe data from API response
//        Recipe recipe = responseEntity.getBody();
//
//        // Save recipe to MongoDB
//        recipeRepository.save(recipe);
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
}
