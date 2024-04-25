import com.group5.PrepPal.data.Profile;
import com.group5.PrepPal.data.Recipe;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ScheduleTest {

    @Test
    void testGenerateMeals() {
        String[] i = {"Bread", "Peanuts", "Jelly"};
        Recipe test = new Recipe("0000", "PBJ", "Lunch", i);
        String[] ii = {"Chicken", "Rice"};
        Recipe test2 = new Recipe("0011", "Chicken And Rice", "Dinner", ii);
        String[] iii = {"Ground Beef", "Tortilla", "Onion", "Tomato", "Cheese"};
        Recipe test3 = new Recipe("0100", "Beef Tacos", "Lunch", iii);
        String[] iiii = {"Batter", "Syrup", "Eggs", "Butter"};
        Recipe test4 = new Recipe("1100", "Waffles", "Breakfast", iiii);
        ArrayList<Recipe> testData = new ArrayList<>();
        testData.add(test);
        testData.add(test2);
        testData.add(test3);
        testData.add(test4);

        ArrayList<String> allergy = new ArrayList<>();
        allergy.add("Peanuts");
        Profile bob = new Profile("bob", 40, 170.8, allergy);

        bob.generateMeals(testData);

        assertEquals(3, bob.weeklySchedule.size()); // Assuming generateMeals adds 3 meals per week
    }
}
