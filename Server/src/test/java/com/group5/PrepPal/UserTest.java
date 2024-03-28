package com.group5.PrepPal;

import com.group5.PrepPal.controller.UserController;
import com.group5.PrepPal.data.User;
import com.group5.PrepPal.data.UserRepository;


public class UserTest {
    // testcase (username = invalid)
    User test = new User("4000", "zen.yamaguchi168@gmail.com", "buh", "12345678");
    //test case (user name = exceptional)
    User test1 = new User("4009900", "biz.yamaguchi168@gmail.com", "buh", "123485678");
    // test case(username = valid)
    User test2 = new User("4008800", "wiz.yamaguchi168@gmail.com", "bruh", "1234856378");


    // test case(email = not valid)
    User test3 = new User("4001100", "wiz.yamaguchi168@gmail", "bruh", "1234856378");
    // test case (email = valid)
    User test4 = new User("40020", "zen.yamaguchi168@gmail.com", "testing", "12232!345678");


    //test case(password = not valid)
    User test5 = new User("400500", "w213z.yamaguchi168@gmail", "tester", "1");
    //test case (password = valid)
    User test6 = new User("4054600", "213214iz.yamaguchi168@gmail", "bruh", "1234856378");

}
