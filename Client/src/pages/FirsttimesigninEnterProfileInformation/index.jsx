import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, SelectBox, Input, Img } from "../../components";
import { Link } from "react-router-dom";
const dropDownOptions = [
  { label: "Vegetarianism", value: "allergyOne" },
  { label: "Veganism", value: "allergyTwo" },
  { label: "Peanuts", value: "allergyThree" },
  { label: "Gluten", value: "allergyFour"},
  { label: "Seafood", value: "allergyFive"},
  { label: "Milk", value: "allergySix"},
  { label: "Eggs", value: "allergySeven"},
  { label: "Soy", value: "allergyEight"},
  { label: "Tree Nuts", value: "allergyNine"},
  { label: "Sesame", value: "allergyTen"},
];

export default function FirsttimesigninEnterProfileInformationPage() {
  return (
    <>
      <Helmet>
        <title>Profile Setup - Enter Your Information</title>
        <meta
          name="description"
          content="Start your journey by entering your profile information. Provide your ID, name, age, weight, and dietary restrictions to personalize your experience."
        />
      </Helmet>

      {/* profile information section */}
      <div className="w-full bg-blue_gray-100_01">
        {/* image and form container section */}
        <div className="flex items-center justify-between gap-5 bg-blue_gray-800 p-11 md:flex-col md:p-5">
          {/* profile image section */}
          <Img
            src="images/img_logo.png"
            alt="house1three_one"
            className="mb-[110px] ml-[13px] h-[376px] w-[376px] self-end object-cover md:ml-0 md:w-full"
          />

          {/* form container section */}
          <div className="mr-[31px] h-[632px] w-[45%] bg-[url(/public/images/img_group_7.svg)] bg-cover bg-no-repeat p-[42px] md:mr-0 md:h-auto md:w-full md:p-5">
            {/* profile form section */}
            <div className="mb-[5px] mt-[21px] flex flex-col gap-5">
              {/* profile form header section */}
              <Text size="s" as="p" className="w-[81%] !text-blue_gray-800 md:w-full">
                Enter your profile information
              </Text>

              {/* profile form fields section */}
              <div className="flex flex-col items-start">
                {/* id field row section */}
                <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                  {/* id label section */}
                  <Text style={{color: "#DAD7CD"}}
                    as="p"
                    className="flex h-[63px] w-[63px] items-center justify-center rounded-[31px] bg-blue_gray-800 text-center"
                  >
                    ID
                  </Text>

                  {/* name input section */}
                  <Input
                    shape="square"
                    type="text"
                    name="name"
                    placeholder={`Name:`}
                    className="mb-1.5 w-[77%] self-end sm:w-full sm:pr-5"
                  />
                </div>

                {/* age input section */}
                <Input shape="square" name="age" placeholder={`Age: `} className="mt-[19px] self-stretch sm:pr-5" />

                {/* weight input section */}
                <Input
                  shape="square"
                  name="weightlbs"
                  placeholder={`Weight (lbs): `}
                  className="mt-[21px] self-stretch sm:pr-5"
                />

                {/* dietary dropdown section */}
                <SelectBox
                  shape="square"
                  name="dietary"
                  placeholder={`Dietary Restrictions`}
                  options={dropDownOptions}
                  className="mt-[19px] self-stretch sm:pr-5"
                />

                {/* continue button stack section */}
                <div className="relative ml-[101px] mt-[49px] h-[45px] w-[62%] md:ml-0 md:h-auto">
                  {/* continue text section */}
                  <Text as="p" className="mb-[7px] text-center">
                    Continue
                  </Text>

                  {/* continue button section */}
                  <Link to="/dashboard">

              
                  <Button
                    size="sm"
                    shape="round"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto w-max min-w-[199px] !rounded-[22px] sm:px-5"
                  >
                    Continue
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}