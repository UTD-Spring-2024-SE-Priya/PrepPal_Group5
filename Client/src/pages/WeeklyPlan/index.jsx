import React, { useState, useEffect } from 'react';
import axios from "axios";
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export default function MealPlan() {
    const [recipes, setRecipes] = useState({});

    const getRecipesForDay = (day) => {
        axios.get('http://localhost:8080/api/recipe/randRec')
            .then(response => {
                setRecipes(prevState => ({
                    ...prevState,
                    [day]: response.data // Store recipes for the specific day
                }));
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        // Fetch recipes for each day of the week
        daysOfWeek.forEach(day => {
            getRecipesForDay(day);
        });
    }, []);

    return (
        <div className="container mx-auto mt-10" style={{ backgroundColor: "#a3b18a"}}>
            <div className="flex flex-col">
                {daysOfWeek.map((day) => (
                    <div key={day} className="flex flex-row justify-between items-center border-b-2 py-4">
                        <div className="w-1/5 font-bold text-lg">{day}</div>
                        {recipes[day]?.map((meal, index) => (
                            <div key={`${day}-${index}`} className="w-1/5 bg-gray-100 p-4 text-center rounded shadow">
                                {meal}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};


