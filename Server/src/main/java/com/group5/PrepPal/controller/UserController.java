package com.group5.PrepPal.controller;

import com.group5.PrepPal.data.User;
import com.group5.PrepPal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(value="/save")
    private String saveUser(@RequestBody User user)
    {
        userService.save(user);
        return user.getId();
    }

    @GetMapping(value="/getall")
    public Iterable<User> getUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/delete/{id}")
    private void deleteUser(@PathVariable("id") String id) {
        userService.deleteUser(id);
    }

    @RequestMapping("/search/{id}")
    private User getUser(@PathVariable(name="id") String userID)
    {
        return userService.getUserByID(userID);
    }

}
