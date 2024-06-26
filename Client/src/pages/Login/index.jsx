import React,{ useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Img } from "../../components";
import { useNavigate, Link} from 'react-router-dom';
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const login = {
      email,
      password
    };

      axios.post(`http://localhost:8080/api/user/login`, login)
      .then(response => {
        if (response.data.success) {
          nav('/dashboard', { state: { email } });
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
        window.alert('Invalid username or password');
      });

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Helmet>
        <title>Login - Access Your Meal Planning Account</title>
        <meta
          name="description"
          content="Log in to manage your meal plans and access a variety of features. Enter your email or use Google to sign in to your existing account quickly and securely."
        />
      </Helmet>

      {/* login page section */}
      <div className="w-full bg-blue_gray-100_01">
        {/* header section */}
        <div className="flex items-center justify-between gap-5 bg-blue_gray-800 p-11 md:flex-col md:p-5">
          {/* logo section */}
          <Img
            src="images/img_logo.png"
            alt="logo_one"
            className="ml-[15px] h-[376px] w-[376px] object-cover md:ml-0 md:w-full"
          />

          {/* login form section */}
          <div className="mr-[31px] h-[632px] w-[45%] bg-[url(/public/images/img_group_18.svg)] bg-cover bg-no-repeat p-[42px] md:mr-0 md:h-auto md:w-full md:p-5">
            {/* login interaction area section */}
            <div className="mb-[5px] mt-[31px] flex flex-col items-center">
              <a href="#" className="self-start">
                {/* login link section */}
                <Text size="lg" as="p" className="text-center">
                  Log in
                </Text>
              </a>

              {/* login description section */}
              <Text size="s" as="p" className="mt-7 w-[91%] text-center md:w-full">
                Enter the email associated with your existing account or sign in using Google{" "}
              </Text>

            <form onSubmit={handleLogin} className="login">
              {/* email input section */}
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder={`Enter email`}
                className="mt-3.5 self-stretch sm:pr-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* password input section */}
              <Input
                shape="square"
                type="password"
                name="password"
                placeholder={`Enter password`}
                className="mt-[9px] self-stretch sm:pr-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* login button section */}
              <Button type="submit" shape="round" className="mt-[18px] min-w-[199px] !rounded-[22px] sm:px-5" onClick={handleLogin}>
                Log in
              </Button>

              </form>

              {/* forgot password button section */}
              <Button color="gray_500" shape="round" className="mt-3 min-w-[199px] !rounded-[22px] sm:px-5">
                Forgot Password?
              </Button>
              <Link to="/SignUp">
                {/* create account button section */}
                <Button shape="round" className="mt-3.5 w-full !rounded-[22px] sm:px-5">
                  Create a new account{" "}
                </Button>
              </Link>

              {/* social login section */}
              <div className="mt-[17px] flex w-[5%] flex-col items-center md:w-full">
                {/* social login view section */}
                <div className="h-[12px] w-[22px] self-stretch bg-blue_gray-100_01" />

                {/* social login or separator section */}
                <Text size="s" as="p" className="relative mt-[-9px] text-center !text-gray-300">
                  O
                </Text>
              </div>

              {/* google login button section */}
              <Button color="gray_500" shape="round" className="mt-[29px] min-w-[284px] !rounded-[22px] sm:px-5">
                Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
