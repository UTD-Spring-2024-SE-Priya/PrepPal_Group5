package com.group5.PrepPal.data;

import com.group5.PrepPal.controller.UserController;
import com.group5.PrepPal.service.UserService;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.Objects;

@Document(collection = "users")
@Data
//@Builder
public class User {
    @Id
    private String email;

    private String username;
    private String password;
    private Profile userProfile;
    //private ArrayList<Recipe> favorites = new ArrayList<>();

    public User(String id, String username, String email, String password)
    {
        //If any of the fields is incorrectly set, the object is not created
        if (!checkUser(username)) {
            throw new IllegalArgumentException("Invalid username format");
        }
        if (!checkEmail(email)) {
            throw new IllegalArgumentException("Invalid email format");
        }
        if (!checkPass(password)) {
            throw new IllegalArgumentException("Invalid password format");
        }

        this.username = username;
        this.email = email;
        this.password = password;
        this.userProfile = null; //initially profile is created as null
    }

    public boolean checkEmail(String x)
    {

        return x.contains("@gmail.com");
    }

    public boolean checkUser(String x)
    {
        return x.length() <= 15 && x.length() >= 4;
        //find if same user
       //getAllUsers();
       // UserService help = new UserService();
    }
    public boolean checkPass(String x)
    {
        return x.length() >= 8;
    }

    public boolean saveProfile(String n, int a, double w, ArrayList<String> dr)
    {
        try
        {
            userProfile = new Profile(n, a, w, dr);
            return true;
        }
        catch(IllegalArgumentException e)
        {
            return false;
        }
    }



    @Override
    public String toString() {
        return "User{" +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

 /*   public void addFav(Recipe x)
    {
        favorites.add(x);
    }

    public void removeFav(Recipe x)
    {
        favorites.remove(x);
    }

    public ArrayList<Recipe> getFavs(){
        return favorites;
    }

*/

}
