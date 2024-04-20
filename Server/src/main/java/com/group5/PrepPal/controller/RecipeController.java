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

//    @GetMapping("/fetchrecipe")
//    public ResponseEntity<String> saveRecipeFromExternalAPI() {
//        recipeService.saveRecipeFromExternalAPI();
//        return ResponseEntity.ok("Recipe fetched and saved successfully");
//    }

    @PostMapping(value="/saverecipe")
    public void saveRecipe(@RequestBody Recipe r) {
        recipeService.saveRecipe(r);
    }


    @GetMapping(value="/getall")
    public Iterable<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @DeleteMapping("/delete/{id}")
    private void deleteRecipe(@PathVariable("id") String id) {
        recipeService.deleteRecipe(id);
    }

    @RequestMapping("/search/{id}")
    private Recipe getRecipeByID(@PathVariable(name="id") String recipeID)
    {
        return recipeService.getRecipeByID(recipeID);
    }
    @GetMapping("/randRec")
    private String[] getRandR()
    {
        return recipeService.randomRecipe();
    }

}
