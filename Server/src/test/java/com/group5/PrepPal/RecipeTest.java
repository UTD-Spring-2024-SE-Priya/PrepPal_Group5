package com.group5.PrepPal;

import com.group5.PrepPal.data.Recipe;
import com.group5.PrepPal.data.RecipeRepository;

import static com.mongodb.assertions.Assertions.assertNotNull;
import static com.mongodb.assertions.Assertions.assertNull;

import com.group5.PrepPal.data.User;
import com.group5.PrepPal.service.RecipeService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class RecipeTest {
        @Mock
        RecipeRepository db; // Mocked Database interface
        @InjectMocks
        static RecipeService recipeService; // Automatically injects 'database' mock into 'userService'

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

                String[] ingr = {"Pasta", "Olive oil", "Garlic", "Salt", "Pepper", "Parmesan cheese"};
                Recipe r1 = new Recipe("1000", "Pasta", "Dinner", ingredients);
                String[] ingr2 = {"Pasta", "Olive oil", "Garlic", "Salt", "Pepper", "Parmesan cheese"};
                Recipe r2 = new Recipe("1000", "Pasta", "Dinner", ingredients);
                String[] ingr3 = {"Pasta", "Olive oil", "Garlic", "Salt", "Pepper", "Parmesan cheese"};
                Recipe r3 = new Recipe("1000", "Pasta", "Dinner", ingredients);
                List<Recipe> mockedValues = Arrays.asList(r1, r2,r3);

                when(recipeService.getAllRecipes()).thenReturn(mockedValues);
                // Call the actual line which would make the PAI Call
                Iterable<Recipe> recipesFetched = recipeService.getAllRecipes();
                int count = 0;
                for (Object element : recipesFetched) {
                        count++;
                }
                assertEquals(3,count);
             //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // favorites testing
               /* User test2 = new User("4008800", "wiz.yamaguchi168@gmail.com", "bruh", "1234856378");

                System.out.println("Here are " + test2.getUsername() + "'s favorite recipes");
                // valid: correct recipe
                 test2.addFav(test1);
                for(Recipe x : test2.getFavs())
                {
                        System.out.println(x.getName());
                }
                assertNotNull(test2.getFavs());

                test2.removeFav(test1);
                // invalid: recipe doesnt exist
                test2.addFav(spagt);
                assertNull(test2.getFavs());

                // exceptional: no input
                test2.addFav();
                assertNull(test2.getFavs());





                */

                /* testing recipes by allergies search
                // needs a recipe array or array list to sort through.. Method should be located in RecipeService?
                       //some method(allergen);  prints list of recipes without it

                       valid: valid allergen


                       invalid: not a real allergen

                       exceptional: no input

                 */



        }
}
