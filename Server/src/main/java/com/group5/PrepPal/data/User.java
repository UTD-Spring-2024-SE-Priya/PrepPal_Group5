package com.group5.PrepPal.data;

import com.group5.PrepPal.controller.UserController;
import com.group5.PrepPal.service.UserService;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Builder;
import lombok.Data;

import java.util.Objects;

@Document(collection = "users")
@Data
@Builder
public class User {
    @Id
    private String id;

    private String email;
    private String username;
    private String password;

    public User(String id, String email, String username, String password)
    {
        this.id = id;
        if(checkEmail(email)) {
            this.email = email;
        }
        if(checkUser(username)) {
            this.username = username;
        }
        if(checkPass(password)) {
            this.password = password;
        }
        if(!Objects.equals(this.id, id) || !Objects.equals(this.username, username) || !Objects.equals(this.password, password) || !Objects.equals(this.email, email)) {

            this.id = this.email = this.username= this.password = null;
        }
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



    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }





}
