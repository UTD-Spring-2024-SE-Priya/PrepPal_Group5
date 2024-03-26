package com.group5.PrepPal.controller;

import com.group5.PrepPal.data.Recipe;
import com.group5.PrepPal.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/recipe")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;


//    @PostMapping("/fetchrecipe")
//    public ResponseEntity<String> saveRecipeFromExternalAPI() {
//        recipeService.saveRecipeFromExternalAPI();
//        return ResponseEntity.ok("Recipes fetched and saved successfully");
//    }


    @GetMapping(value="/getall")
    public Iterable<Recipe> getRecipes() {
        return recipeService.getAllRecipes();
    }

    @DeleteMapping("/delete/{id}")
    private void deleteUser(@PathVariable("id") String id) {
        recipeService.deleteRecipe(id);
    }

    @RequestMapping("/search/{id}")
    private Recipe getRecipe(@PathVariable(name="id") String recipeID)
    {
        return recipeService.getRecipeByID(recipeID);
    }

}
