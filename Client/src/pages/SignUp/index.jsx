import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Img } from "../../components";

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>PrepPal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-blue_gray-100">
        <div className="flex items-start justify-between gap-5 bg-blue_gray-800 p-11 md:flex-col md:p-5">
          <Img
            src="images/img_logo.png"
            alt="house1one_one"
            className="ml-[54px] mt-28 h-[376px] w-[376px] object-cover md:ml-0 md:w-full"
          />
          <div className="mr-[31px] flex h-[632px] w-[46%] flex-col items-start justify-end bg-[url(/public/images/img_group_5.svg)] bg-cover bg-no-repeat p-[7px] md:mr-0 md:h-auto md:w-full md:p-5">
            <div className="mb-[5px] mt-[55px] flex w-[92%] flex-col items-end md:w-full">
              <a href="#" className="ml-8 self-start md:ml-0">
                <Text size="s" as="p" className="text-center !text-blue_gray-800_01">
                  Create an account
                </Text>
              </a>
              <Input
                shape="square"
                type="text"
                name="firstName"
                placeholder={`Enter your first name`}
                className="mt-[17px] w-[93%] sm:pr-5"
              />
              <Input
                shape="square"
                type="text"
                name="lastName"
                placeholder={`Enter your last name`}
                className="mt-[13px] w-[93%] sm:pr-5"
              />
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder={`Enter an email `}
                className="mt-4 w-[93%] sm:pr-5"
              />
              <Input
                shape="square"
                type="password"
                name="password"
                placeholder={`Enter password`}
                className="mt-3 w-[93%] sm:pr-5"
              />
              <Text as="p" className="mt-3 w-[46%] self-start text-center !text-blue_gray-800_7a md:w-full">
                <>
                  Password must contain: <br />8 characters
                  <br />1 uppercase
                  <br />1 lowercase
                  <br />1 number
                  <br />1 special character
                </>
              </Text>
              <Input
                shape="square"
                type="password"
                name="password"
                placeholder={`Re-enter your password`}
                className="mt-[18px] w-[93%] sm:pr-5"
              />
              <div className="mr-[198px] mt-[25px] flex bg-blue_gray-100 px-[5px] md:mr-0">
                <Text as="p" className="text-center !text-white-A700">
                  O
                </Text>
              </div>
              <Button shape="round" className="mr-[111px] mt-5 min-w-[199px] md:mr-0 sm:px-5">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
