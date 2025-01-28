"use client";

import { Checkbox, Divider, Form, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/buttton";
import { useState } from "react";
import { Eye, EyeClosed, EyeIcon, LogIn, Mail } from "lucide-react";
import Alerts from "../Alerts";

const Login = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.status !== 200 && json.status !== 500) {
        Alerts.error(json.message);
        setLoading(false);
        return;
      }
      if (json.status !== 500) {
        Alerts.error(json.message);
        setLoading(false);
        return;
      }
      Alerts.success("Logged in successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alerts.error("Failed to log in. Please check your credentials.");
    }
  };
  return (
    <>
      <div className="">
        <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
          <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
            <div className="max-md:mt-8">
              <Image
                src="/login-image.webp"
                className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover "
                alt="Dining Experience"
                width={500}
                height={500}
              />
            </div>
            <div className="border border-gray-300 rounded-xl p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <Form className="space-y-2" validationBehavior="native" onSubmit={onSubmit}>
                <h3 className="text-gray-800 text-3xl font-bold">Sign in</h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Log in to connect with trusted sitters and give your pets the care they deserve!
                </p>

                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  variant="bordered"
                  endContent={<Mail className="text-2xl text-default-400 pointer-events-none" />}
                  classNames={{
                    inputWrapper: "border border-gray-300",
                  }}
                />

                <Input
                  endContent={
                    <span
                      aria-label="toggle password visibility"
                      className="focus:outline-none cursor-pointer "
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeClosed className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <Eye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </span>
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  isRequired
                  name="password"
                  classNames={{
                    inputWrapper: "border border-gray-300",
                  }}
                />

                <Checkbox size="sm" radius="sm" defaultSelected>
                  Remember Me
                </Checkbox>

                <div className="text-sm">
                  <Link href="jajvascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </Link>
                </div>

                <Button isLoading={loading} type="submit" color="primary" className="w-full">
                  Sign in <LogIn />
                </Button>

                <div className="flex items-center relative justify-center w-full py-2">
                  <Divider />
                  <span className="absolute left-1/2 top-1/2 bg-white -translate-x-1/2 -translate-y-1/2">or</span>
                </div>

                <Button className="w-full bg-transparent border border-gray-300 ">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <Image src="/google-color.svg" className=" w-5" alt="google logo" width={300} height={300} />
                    <span className="">Continue with Google</span>
                  </div>
                </Button>

                <p className="text-sm !mt-8 text-center text-gray-500">
                  Don't have an account{" "}
                  <Link
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
