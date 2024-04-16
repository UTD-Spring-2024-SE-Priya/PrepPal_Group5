import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Img } from "../../components";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>PrepPal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-blue_gray-100">
        <div className="flex items-center justify-between gap-5 bg-blue_gray-800 p-11 md:flex-col md:p-5">
          <Img
            src="images/img_logo.png"
            alt="logo_one"
            className="ml-[15px] h-[376px] w-[376px] object-cover md:ml-0 md:w-full"
          />
          <div className="mr-[31px] h-[632px] w-[45%] bg-[url(/public/images/img_group_5.svg)] bg-cover bg-no-repeat p-[42px] md:mr-0 md:h-auto md:w-full md:p-5">
            <div className="mb-[5px] mt-[31px] flex flex-col items-center">
              <a href="#" className="self-start">
                <Text size="s" as="p" className="text-center">
                  Log in
                </Text>
              </a>
              <Text as="p" className="mt-7 w-[91%] text-center md:w-full">
                Enter the email associated with your existing account or sign in using Google{" "}
              </Text>
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder={`Enter email`}
                className="mt-3.5 self-stretch sm:pr-5"
              />
              <Input
                shape="square"
                type="password"
                name="password"
                placeholder={`Enter password`}
                className="mt-[9px] self-stretch sm:pr-5"
              />
              <Button shape="round" className="mt-[18px] min-w-[199px] sm:px-5">
                Log in
              </Button>
              <Button color="gray_500" shape="round" className="mt-3 min-w-[199px] sm:px-5">
                Forgot Password?
              </Button>
              <Link to="/SignUp">
                <Button shape="round" className="mt-3.5 w-full sm:px-5">
                  Forgot email? Create a new account{" "}
                </Button>
              </Link>
              <div className="mt-[17px] flex w-[67%] flex-col items-center gap-[29px] md:w-full">
                <div className="flex w-[8%] flex-col items-center md:w-full">
                  <div className="h-[12px] w-[22px] self-stretch bg-blue_gray-100" />
                  <Text as="p" className="relative mt-[-9px] text-center !text-gray-300">
                    O
                  </Text>
                </div>
                <Button color="gray_500" shape="round" className="w-full sm:px-5">
                  Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
