package com.group5.PrepPal;

import com.group5.PrepPal.data.Recipe;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RecipeTest {

        @Test
        void testValidRecipe() {
                String id = "001";
                String name = "Spaghetti Bolognese";
                String mealType = "Dinner";
                String[] ingredients = {"Spaghetti", "Tomato sauce", "Ground beef", "Onion", "Garlic", "Parmesan cheese"};

                Recipe recipe = new Recipe(id, name, mealType, ingredients);

                assertEquals(id, recipe.getId());
                assertEquals(name, recipe.getName());
                assertEquals(mealType, recipe.getMealType());
                assertArrayEquals(ingredients, recipe.getIngredients());
        }

        @Test
        void testInvalidRecipe() {
                // Test with empty name
                assertThrows(IllegalArgumentException.class, () -> {
                        new Recipe("001", "", "Dinner", new String[]{"Spaghetti", "Tomato sauce"});
                });

                // Test with invalid meal type
                assertThrows(IllegalArgumentException.class, () -> {
                        new Recipe("001", "Spaghetti Bolognese", "Dessert", new String[]{"Spaghetti", "Tomato sauce"});
                });

                // Test with less than 2 ingredients
                assertThrows(IllegalArgumentException.class, () -> {
                        new Recipe("001", "Spaghetti Bolognese", "Dinner", new String[]{"Spaghetti"});
                });
        }
}
