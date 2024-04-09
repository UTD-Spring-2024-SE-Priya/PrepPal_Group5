package com.group5.PrepPal.data;

import java.util.ArrayList;

public class Profile {
    private String name;
    private int age;
    private double weight;
    ArrayList<String> dietaryRestrictions;

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
        return name != null && !name.isEmpty();
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

}
