package com.group5.PrepPal.service;

import com.group5.PrepPal.data.User;
import com.group5.PrepPal.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void save(User user)
    {
        userRepository.save(user);
    }

    public Iterable<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    public User getUserByID(String userID) {
        return userRepository.findById(userID).get();
    }
}
