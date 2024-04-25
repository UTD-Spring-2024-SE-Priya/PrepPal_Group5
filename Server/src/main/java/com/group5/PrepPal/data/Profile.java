package com.group5.PrepPal.data;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.Random;
@Data
//@Builder
public class Profile {
    private String name;
    private int age;
    private double weight;
    ArrayList<String> dietaryRestrictions;
    public ArrayList<Recipe> weeklySchedule = new ArrayList<Recipe>();

    public Profile() {}


    public Profile(String n, int a, double w, ArrayList<String> dr) {
        if(!checkName(n))
        {
            throw new IllegalArgumentException("Invalid name");
        }
        if(!checkAge(a))
        {
            throw new IllegalArgumentException("Invalid age");
        }
        if(!checkWeight(w))
        {
            throw new IllegalArgumentException("Invalid weight");
        }
        if(!checkDietaryRestrictions(dr))
        {
            throw new IllegalArgumentException("Invalid dietary restrictions");
        }
        this.name = n;
        this.age = a;
        this.weight = w;
        this.dietaryRestrictions = dr;
    }

    // Method to validate name
    private boolean checkName(String name)
    {
        return name != null && !name.trim().isEmpty();
    }

    // Method to validate age
    private boolean checkAge(int age)
    {
        return age > 0;
    }

    // Method to validate weight
    private boolean checkWeight(double weight)
    {
        return weight > 0;
    }

    // Method to validate dietary restrictions
    private boolean checkDietaryRestrictions(ArrayList<String> dietaryRestrictions)
    {
        return dietaryRestrictions != null && !dietaryRestrictions.isEmpty();
    }

    public void generateMeals(ArrayList<Recipe> dataBase)
    {
        for(int k = 0; k< dataBase.size(); k ++)
        {
            Recipe temp = dataBase.get(k);
            for(int z =0; z< temp.getIngredients().length; z++)
            {
                String test = temp.getIngredients()[z];
                for(int u = 0; u < dietaryRestrictions.size(); u++)
                {
                   if(dietaryRestrictions.get(u).equals(test))
                   {
                       dataBase.remove(temp);
                   }
                }
            }
        }
        for( int x = 0; x <3; x++)
        {
            Recipe temp = findRandomRecipe(dataBase);
            weeklySchedule.add(temp);
            dataBase.remove(temp);
        }


    }


    private Recipe findRandomRecipe(ArrayList<Recipe> recipes)
    {
        Random rand = new Random();
        return recipes.get(rand.nextInt(recipes.size()));
    }

}
