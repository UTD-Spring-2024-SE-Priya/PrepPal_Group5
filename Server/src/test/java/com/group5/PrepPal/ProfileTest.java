package com.group5.PrepPal;

import com.group5.PrepPal.data.Profile;
import com.group5.PrepPal.data.Recipe;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class ProfileTest {

    @Test
    void testValidProfile() {
        ArrayList<String> dietaryRestrictions = new ArrayList<>(Arrays.asList("Dairy", "Gluten"));
        Profile profile = new Profile("John", 25, 75.5, dietaryRestrictions);
        assertEquals("John", profile.getName());
        assertEquals(25, profile.getAge());
        assertEquals(75.5, profile.getWeight());
        assertEquals(dietaryRestrictions, profile.getDietaryRestrictions());
    }

    @Test
    void testInvalidName() {
        ArrayList<String> dietaryRestrictions = new ArrayList<>(Arrays.asList("Dairy", "Gluten"));
        assertThrows(IllegalArgumentException.class, () -> new Profile("", 25, 75.5, dietaryRestrictions));
        assertThrows(IllegalArgumentException.class, () -> new Profile(null, 25, 75.5, dietaryRestrictions));
    }

    @Test
    void testInvalidAge() {
        ArrayList<String> dietaryRestrictions = new ArrayList<>(Arrays.asList("Dairy", "Gluten"));
        assertThrows(IllegalArgumentException.class, () -> new Profile("John", 0, 75.5, dietaryRestrictions));
        assertThrows(IllegalArgumentException.class, () -> new Profile("John", -5, 75.5, dietaryRestrictions));
    }

    @Test
    void testInvalidWeight() {
        ArrayList<String> dietaryRestrictions = new ArrayList<>(Arrays.asList("Dairy", "Gluten"));
        assertThrows(IllegalArgumentException.class, () -> new Profile("John", 25, 0, dietaryRestrictions));
        assertThrows(IllegalArgumentException.class, () -> new Profile("John", 25, -75.5, dietaryRestrictions));
    }

    @Test
    void testInvalidDietaryRestrictions() {
        assertThrows(IllegalArgumentException.class, () -> new Profile("John", 25, 75.5, null));
        assertThrows(IllegalArgumentException.class, () -> new Profile("John", 25, 75.5, new ArrayList<>()));
    }

    @Test
    void testGenerateMeals() {
        ArrayList<String> dietaryRestrictions = new ArrayList<>(Arrays.asList("Dairy", "Gluten"));
        Profile profile = new Profile("John", 25, 75.5, dietaryRestrictions);
        ArrayList<Recipe> recipes = new ArrayList<>();
        Recipe recipe1 = new Recipe("1", "Recipe.java 1", "Breakfast", new String[]{"Egg", "Bread"});
        Recipe recipe2 = new Recipe("2", "Recipe.java 2", "Lunch", new String[]{"Rice", "Chicken"});
        Recipe recipe3 = new Recipe("3", "Recipe.java 3", "Dinner", new String[]{"Salad", "Fish"});
        recipes.add(recipe1);
        recipes.add(recipe2);
        recipes.add(recipe3);

        profile.generateMeals(recipes);

        assertEquals(3, profile.getWeeklySchedule().size());
    }
}
