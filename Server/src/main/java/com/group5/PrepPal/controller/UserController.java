package com.group5.PrepPal.controller;

import com.group5.PrepPal.data.User;
import com.group5.PrepPal.data.Profile;
import com.group5.PrepPal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(value="/createUser")
    private void saveUser(@RequestBody User user)
    {
        user.saveProfile("N/A", 0, 0, null); //Initially set profile info to dummy values
        userService.save(user);
        //return user.getId();
    }

    @PostMapping(value="/createProfile/{userEmail}")
    private void saveProfile(@PathVariable String userEmail, @RequestBody Profile prof)
    {
        User user = userService.getUserByEmail(userEmail);
        user.saveProfile(prof);
        userService.save(user);
    }

    @PostMapping(value="/login")
    public ResponseEntity<Map<String, Object>> signIn(@RequestBody Map<String, String> signInData){
        String email = signInData.get("email");
        String password = signInData.get("password");

        User user = userService.getUserByEmail(email);
        Map<String, Object> response = new HashMap<>();
        if (user != null && user.getPassword().equals(password)) {
            // User is logged in
            response.put("success", true);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            // Invalid username or password
            response.put("success", false);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
    }


    @GetMapping(value="/getall")
    public Iterable<User> getUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping(value="/delete/{id}")
    private void deleteUser(@PathVariable("id") String id) {
        userService.deleteUser(id);
    }

//    @RequestMapping(value="/search/{id}")
//    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
//        String email = credentials.get("email");
//        String password = credentials.get("password");
//
//        // Retrieve user by email from the database
//        User user = userService.getUserByEmail(email);
//
//        if (user == null) {
//            // User not found
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//        } else {
//            // Compare the entered password with the user's password
//            if (password.equals(user.getPassword())) {
//                // Passwords match, user is authenticated
//                return ResponseEntity.ok("User successfully authenticated");
//            } else {
//                // Passwords do not match
//                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//            }
//        }
//    }

}
