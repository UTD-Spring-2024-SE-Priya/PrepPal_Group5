import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, SelectBox, Input, Img } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function FirsttimesigninEnterProfileInformationPage() {
  const dropDownOptions = [
    { label: "Vegetarianism", value: "Vegetarianism" },
    { label: "Veganism", value: "Veganism" },
    { label: "Peanuts", value: "Peanuts" },
    { label: "Gluten", value: "Gluten" },
    { label: "Seafood", value: "Seafood" },
    { label: "Milk", value: "Milk" },
    { label: "Eggs", value: "Eggs" },
    { label: "Soy", value: "Soy" },
    { label: "Tree Nuts", value: "Tree Nuts" },
    { label: "Sesame", value: "Sesame" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedValues = selectedOptions.map(option => option.value);
  
    const profile = {
      name,
      age,
      weight,
      dietaryRestrictions: selectedValues // Use the updated state directly
    };
  
    axios.post(`http://localhost:8080/api/user/createProfile/${encodeURIComponent(email)}`, profile)
      .then(response => {
        console.log(`Profile created with name: ${response.data}`);
        console.log(response);
        console.log(response.data);
        navigate("/dashboard", { state: { email } });
      })
      .catch(error => {
        console.error('One or more of the fields is invalid. Please retry. ');
      });
  
    setName("");  
    setAge("");
    setWeight("");
    setDietaryRestrictions([]);
  };
  

  return (
    <>
      <Helmet>
        <title>Profile Setup - Enter Your Information</title>
        <meta
          name="description"
          content="Start your journey by entering your profile information. Provide your ID, name, age, weight, and dietary restrictions to personalize your experience."
        />
      </Helmet>

      <div className="w-full bg-blue_gray-100_01">
        <div className="flex items-center justify-between gap-5 bg-blue_gray-800 p-11 md:flex-col md:p-5">
          <Img
            src="images/img_logo.png"
            alt="house1three_one"
            className="mb-[110px] ml-[13px] h-[376px] w-[376px] self-end object-cover md:ml-0 md:w-full"
          />
          <div className="mr-[31px] h-[632px] w-[45%] bg-[url(/public/images/img_group_7.svg)] bg-cover bg-no-repeat p-[42px] md:mr-0 md:h-auto md:w-full md:p-5">
            <div className="mb-[5px] mt-[21px] flex flex-col gap-5">
              <Text size="s" as="p" className="w-[81%] !text-blue_gray-800 md:w-full">
                Enter your profile information
              </Text>

              <div className="flex flex-col items-start">
                <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                  <Text style={{color: "#DAD7CD"}}
                    as="p"
                    className="flex h-[63px] w-[63px] items-center justify-center rounded-[31px] bg-blue_gray-800 text-center"
                  >
                    ID
                  </Text>
                  <Input
                    shape="square"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={`Name:`}
                    className="mb-1.5 w-[77%] self-end sm:w-full sm:pr-5"
                  />
                </div>
                <Input
                  shape="square"
                  type="text"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder={`Age: `}
                  className="mt-[19px] self-stretch sm:pr-5"
                />
                <Input
                  shape="square"
                  type="text"
                  name="weightlbs"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={`Weight (lbs): `}
                  className="mt-[21px] self-stretch sm:pr-5"
                />
                <SelectBox
                  shape="square"
                  name="dietary"
                  value={selectedOptions}
                  onChange={handleSelectChange}
                  placeholder={`Dietary Restrictions`}
                  options={dropDownOptions}
                  isMulti
                  className="mt-[19px] self-stretch sm:pr-5"
                />
                <div className="relative ml-[101px] mt-[49px] h-[45px] w-[62%] md:ml-0 md:h-auto">
                  <Text as="p" className="mb-[7px] text-center">
                    Continue
                  </Text>
                  <Button
                    size="sm"
                    shape="round"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto w-max min-w-[199px] !rounded-[22px] sm:px-5"
                    onClick={handleSubmit}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
