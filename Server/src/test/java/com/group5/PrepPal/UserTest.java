package com.group5.PrepPal;

import com.group5.PrepPal.data.User;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void testValidUserCreation() {
        User user = new User("testUsername", "test@gmail.com", "password123");
        assertEquals("testUsername", user.getUsername());
        assertEquals("test@gmail.com", user.getEmail());
        assertEquals("password123", user.getPassword());
    }

    @Test
    void testInvalidUsername() {
        assertThrows(IllegalArgumentException.class, () -> {
            new User("use", "test@gmail.com", "password123");
        });
    }


    @Test
    void testInvalidEmailFormat() {
        assertThrows(IllegalArgumentException.class, () -> {
            new User("testUsername", "test.com", "password123");
        });
    }

    @Test
    void testInvalidPasswordFormat() {
        assertThrows(IllegalArgumentException.class, () -> {
            new User("testUsername", "test@gmail.com", "pwd");
        });
    }

    @Test
    void testSaveProfileSuccess() {
        User user = new User("testUsername", "test@gmail.com", "password123");
        assertTrue(user.saveProfile("John", 30, 70.5, new ArrayList<>(Arrays.asList("Gluten", "Dairy"))));
        assertNotNull(user.getUserProfile());
    }

    @Test
    void testSaveProfileFailure() {
        User user = new User("testUsername", "test@gmail.com", "password123");
        assertFalse(user.saveProfile("John", 30, 70.5, new ArrayList<>()));
        assertNull(user.getUserProfile());
    }
}
