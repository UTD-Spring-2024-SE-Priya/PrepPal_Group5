import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Your Personal Meal Planning Hub</title>
        <meta
          name="description"
          content="Welcome to your dashboard! Explore your weekly plan, saved recipes, and settings. Start your meal planning journey and make the most of your time and ingredients."
        />
      </Helmet>

      {/* main dashboard section */}
      <div className="relative h-[877px] w-full bg-blue_gray-800 p-2.5 md:h-auto">
        {/* sidebar section */}
        <div className="flex w-[97%] items-start md:flex-col">
          {/* sidebar content section */}
          <Sidebar
            width="331px !important"
            className="!sticky top-0 z-[1] flex h-screen flex-col gap-[34px] overflow-auto bg-gray-500 pb-[21px] md:hidden sm:pb-5"
          >
            <Img src="images/img_logo_56x138.png" alt="logo_one" className="h-[56px] w-[42%] self-start object-cover" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "28px",
                  backgroundColor: "#d9d9d9",
                  color: "#344e41",
                  fontWeight: 400,
                  fontSize: "25px",
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "0.98px" } }}
              className="flex w-full flex-col self-stretch"
            >
              <MenuItem>Dashboard</MenuItem>
              <Link to="/weeklyplan">
                <MenuItem>Weekly Plan</MenuItem>
                </Link>
              <MenuItem>Weekly Prep Time</MenuItem>

              <MenuItem>Saved Recipes </MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Search</MenuItem>
              <MenuItem>Delivery/Pickup</MenuItem>
              <Link to="/">
              <MenuItem>Log out</MenuItem>
              </Link>
            </Menu>
            
          </Sidebar>

          {/* welcome message section */}
          <div className="relative ml-[-318px] flex flex-1 justify-end self-end rounded-[7px] bg-blue_gray-100 p-[55px] md:ml-0 md:self-stretch md:p-5">
            <div className="my-[29px] flex w-[69%] justify-center rounded-[39px] bg-gray-500 px-14 py-[152px] md:w-full md:p-5">
              <div className="mb-[42px] flex w-[48%] justify-center rounded-[36px] bg-blue_gray-100 p-[18px] md:w-full">
                <Text as="p" className="mb-[166px] w-[88%] text-center">
                  <>
                    Welcome user!
                    <br />
                    <br />
                    Choose one of the options to the left to start your meal planning journey!
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* user profile section */}
        <div
         className="absolute right-[8%] top-[20.00px] m-auto flex flex-wrap items-center gap-3">
          <Text
            size="s"
            as="p"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-500 text-center !text-blue_gray-100_01"
          >
            ID
          </Text>
          <Text size="xs" as="p" className="text-center !text-blue-A700">
            email@example.com
          </Text>
        </div>
      </div>
    </>
  );
}
