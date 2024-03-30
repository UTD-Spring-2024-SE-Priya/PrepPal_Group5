package com.group5.PrepPal;

import com.group5.PrepPal.controller.RecipeController;
import com.group5.PrepPal.data.Recipe;
import com.group5.PrepPal.data.RecipeRepository;

import static com.mongodb.assertions.Assertions.assertNotNull;
import static com.mongodb.assertions.Assertions.assertNull;

import com.group5.PrepPal.service.RecipeService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class RecipeTest {
        @Mock
        RecipeRepository db; // Mocked Database interface
        @InjectMocks
        RecipeService recipeService; // Automatically injects 'database' mock into 'userService'

        String[] ingr = {"Flour", "2 Eggs", "Vanilla Extract", "Milk", "Sugar"};
        Recipe recipe1 = new Recipe("recipe1", "Pancakes", "Breakfast", ingr);

        @Test
        public void testRecipe()
        {
            String[] ingr = {"Flour", "2 Eggs", "Vanilla Extract", "Milk", "Sugar"};
            Recipe recipe1 = new Recipe("recipe1", "Pancakes", "Breakfast", ingr);
            // Call the method under test
            recipeService.saveRecipe(recipe1);

            // Verify that the database's storeUser method was called with the correct User
            verify(db).save(recipe1);
        }



        public static void main(String[] args){
                //Valid Recipe
                String[] ingredients = {"Pasta", "Olive oil", "Garlic", "Salt", "Pepper", "Parmesan cheese"};
                Recipe test1 = new Recipe("1000", "Pasta", "Dinner", ingredients);
                assertNotNull(test1.getName());
                assertNotNull(test1.getMealType());
                assertNotNull(test1.getIngredients());
                System.out.println("Test case passed.");

//
//        //Invalid Recipe - one ingredient empty
//        String[] ingredients2 = {"Pasta", "", "Garlic", "Salt", "Pepper", "Parmesan cheese"};
//        Recipe test2 = new Recipe("1001", "Pasta", "Lunch", ingredients2);
//        assertNotNull(test2.getName());
//        assertNotNull(test2.getMealType());
//        assertNotNull(test2.getIngredients());
//
//        //Invalid Recipe - invalid name
//        String[] ingredients3 = {"Pasta", "Olive Oil", "Garlic", "Salt", "Pepper", "Parmesan cheese"};
//        Recipe test3 = new Recipe("1001", "000", "Lunch", ingredients3);
//        assertNull(test2.getName());
//        assertNotNull(test2.getMealType());
//        assertNotNull(test2.getIngredients());
//
//        //Invalid Recipe - invalid meal type
//        String[] ingredients1 = {"Pasta", "Olive Oil", "Garlic", "Salt", "Pepper", "Parmesan cheese"};
//        Recipe test4 = new Recipe("1001", "Pasta", "Meal", ingredients1);
//        assertNotNull(test2.getName());
//        assertNull(test2.getMealType());
//        assertNotNull(test2.getIngredients());
//
//
//        System.out.println("Test case 2 passed.");
                //System.out.println("All test cases passed!");
        }

}
