package com.group5.PrepPal;

import com.group5.PrepPal.controller.UserController;
import com.group5.PrepPal.data.User;
import com.group5.PrepPal.data.UserRepository;

import static com.mongodb.assertions.Assertions.assertNotNull;
import static com.mongodb.assertions.Assertions.assertNull;


public class UserTest {
    public static void main(String[] args){

        System.out.println("Hello, World!");
        // testcase (username = invalid)
        User tester = new User("4000", "zen.yamaguchi168@gmail.com", "buh", "12345678");
        assertNull(tester.getUsername());


        //test case (user name = exceptional)
        User test1 = new User("4009900", "biz.yamaguchi168@gmail.com", "buh", "123485678");
         assertNull(test1.getUsername());

        // test case(username = valid)
        User test2 = new User("4008800", "wiz.yamaguchi168@gmail.com", "bruh", "1234856378");
        assertNotNull(test2.getUsername());



        // test case(email = not valid)
        User test3 = new User("4001100", "wiz.yamaguchi168gmail", "bruh", "1234856378");

         assertNull(test3.getUsername());

        // test case (email = valid)
        User test4 = new User("40020", "zen.yamaguchi168@gmail.com", "testing", "12232!345678");
        assertNotNull(test4.getUsername());

        //test case(password = not valid)
        User test5 = new User("400500", "w213z.yamaguchi168@gmail", "tester", "1");
        assertNull(test5.getUsername());

        //test case (password = valid)
        User test6 = new User("40088030", "wiz.yamaguchi168@gmail.com", "bruh", "1234856378");
        assertNotNull(test6.getUsername());
    }

}
