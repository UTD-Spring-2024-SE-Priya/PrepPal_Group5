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

    @PutMapping(value="/createProfile")
    private void saveProfile(@RequestBody User user, @RequestBody Profile prof)
    {
        user.setUserProfile(prof);
        userService.save(user);
        //return user.getId();
    }

//    None of this code commented is working properly
//    @PostMapping(value="/login")
//    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
//        String email = credentials.get("email");
//        String password = credentials.get("password");
//
//        User user = userService.getUserByID(email);
//
//        if (user==null)
//        {
//            return ResponseEntity.ok("NULL.");
//        }
//        else if(user.getPassword().equals(password)) {
//            return ResponseEntity.ok("User successfully authenticated.");
//        } else {
//            return ResponseEntity.status(401).body("Invalid email or password.");
//        }
//    }
//
//    @PostMapping(value="/login")
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

//    @GetMapping("/{id}")
//    public ResponseEntity<User> getUser(@PathVariable String id) {
//        User user = userService.getUserByEmail(id);
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @GetMapping(value="/getall")
    public Iterable<User> getUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping(value="/delete/{id}")
    private void deleteUser(@PathVariable("id") String id) {
        userService.deleteUser(id);
    }

    @RequestMapping(value="/search/{id}")
        public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        // Retrieve user by email from the database
        User user = userService.getUserByEmail(email);

        if (user == null) {
            // User not found
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        } else {
            // Compare the entered password with the user's password
            if (password.equals(user.getPassword())) {
                // Passwords match, user is authenticated
                return ResponseEntity.ok("User successfully authenticated");
            } else {
                // Passwords do not match
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        }
    }

}
