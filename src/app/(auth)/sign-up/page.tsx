"use client";
import { z } from "zod";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { AlertCircle, ArrowLeft, Loader2, Mail, X } from "lucide-react";
import { useRouter } from "next/navigation";

const schema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type FormValues = z.infer<typeof schema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | null>(null);
  const [canResend, setCanResend] = useState(true);
  const [timer, setTimer] = useState(60);

  const isOTPButtonDisabled = !(value ? value?.length > 5 : false);

  const route = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        values
      );
      if (response?.status === 200) {
        setEmail(response?.data?.email);
        setSuccess(true);
        setCanResend(false);
        setTimer(60);
      }
    } catch (error: any) {
      const message = (await error?.response?.data) || "Something went wrong";
      console.log(error.response.data);
      if (process.env.NODE_ENV !== "production") {
        console.log(error);
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post( `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/otp`,{ value, email }, {withCredentials:true});

      if (response?.status === 200) {
        form.reset();
        route.push("/");
      }
    } catch (error: any) {
      const message = (await error?.response?.data) || "Something went wrong";
      console.log(error);
      if (error?.response?.status === 403 || error?.response?.status === 409) {
        form.reset();
        setSuccess(false);
      }
      if (process.env.NODE_ENV !== "production") {
        console.log(error);
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendCode = () => {
    setTimer(60);
    setCanResend(false);
    setError("Email has been sent.");
    setTimeout(() => {
      setError("Please check your spam folder.");
    }, 5000);
  };

  return (
    <motion.div
    className="w-full h-auto max-w-md"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      {!success ? (
        <Card className="w-full h-auto max-w-md bg-zinc-900/50 border border-zinc-700 shadow-lg">
          <CardHeader className="pb-0">
            <CardTitle className="text-center text-zinc-100 text-2xl">
              Create your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 cursor-pointer text-blue-400 hover:text-blue-300 "
              >
                <Icons.facebook className="w-5 h-5" />
                <span>Facebook</span>
              </Button>
              <Button
                variant="outline"
                className="flex-1 cursor-pointer  text-yellow-500 hover:text-yellow-400"
              >
                <Icons.google className="w-5 h-5" />
                <span>
                  <b className="text-blue-500">G</b>
                  <b className="text-orange-600">o</b>
                  <b className="text-yellow-500">o</b>
                  <b className="text-blue-500">G</b>
                  <b className="text-green-500">l</b>
                  <b className="text-orange-600">e</b>
                </span>
              </Button>
            </div>
            <div className="flex items-center gap-3 my-4 text-sm text-zinc-400">
              <Separator className="flex-1" />
              <span className="whitespace-nowrap border-2 rounded-full inline-block p-1 px-2 text-zinc-200 text-lg">
                or
              </span>
              <Separator className="flex-1" />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="First name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div>
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="First name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="First name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="mt-1 bg-zinc-800 text-zinc-200 pr-10"
                            disabled={loading}
                            {...field}
                          />
                          <button
                            type="button"
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                            onClick={() => setShowPassword((s) => !s)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 cursor-pointer"
                          >
                            {showPassword ? (
                              <Icons.eyeOff className="w-5 h-5" />
                            ) : (
                              <Icons.eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {error && (
                  <div className="text-white text-sm w-full bg-red-800 p-2 rounded-md flex gap-x-2 items-center">
                    <AlertCircle className="size-4 text-white mt-0.5" />
                    {error}
                    <X
                      className="size-4 mt-0.5 self-end justify-self-end place-self-end self float-end ml-auto cursor-pointer"
                      onClick={() => setError(null)}
                    />
                  </div>
                )}

                <div className=" flex justify-center">
                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    variant="orange"
                    disabled={loading}
                  >
                    {loading ? (
                      <Icons.loader className="ml-2 w-4 h-4 animate-spin text-white" />
                    ) : (
                      <div className="flex items-center justify-center">
                        <span>Continue</span>
                        <Icons.chevronRight className="ml-2 w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </div>

                <div className="text-center text-sm text-zinc-400">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-orange-600 font-medium "
                  >
                    Log in
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="pt-0" />
        </Card>
      ) : (
        <Card className="w-full h-auto max-w-md bg-zinc-900/50 border border-zinc-700 shadow-lg">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-col justify-center items-center text-2xl">
                <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                Verify your email
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center flex-col space-y-4 items-center  ">
              <div className="text-center text-zinc-400 text-sm pb-2">
                We sent a 6-digit code to{" "}
                <b className="text-zinc-50">{email}</b>.
                <br />
                Enter it below to confirm your account.
              </div>
              <InputOTP
                className=""
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                value={value}
                disabled={loading}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <div className="w-full text-center">
                <div className="text-sm text-center">
                  {canResend ? (
                    <Button
                      type="button"
                      onClick={handleSendCode}
                      variant="link"
                      disabled={loading}
                      className="cursor-pointer w-auto mb-4 text-orange-600 hover:text-orange-500 "
                    >
                      Resend Code
                    </Button>
                  ) : (
                    <div className="text-gray-500 pb-4">
                      Resend code in{" "}
                      <span className="text-white font-mono">{timer}s</span>
                    </div>
                  )}
                </div>
                {error && (
                  <div className="text-white text-sm w-full bg-red-800 p-2 rounded-md flex gap-x-2 items-center mb-4">
                    <AlertCircle className="size-4 text-white mt-0.5" />
                    {error}
                    <X
                      className="size-4 mt-0.5 self-end justify-self-end place-self-end self float-end ml-auto cursor-pointer"
                      onClick={() => setError(null)}
                    />
                  </div>
                )}
                <Button
                  type="button"
                  onClick={handleOtp}
                  variant="orange"
                  disabled={isOTPButtonDisabled || loading}
                  className="cursor-pointer w-full "
                >
                  {loading ? (
                    <Loader2 className="sieze-4 text-zinc-50 animate-spin" />
                  ) : (
                    "Continue >"
                  )}
                </Button>
              </div>

              <Button
                onClick={() => setSuccess(false)}
                variant="ghost"
                className="cursor-pointer hover:bg-zinc-900 focus:bg-zinc-400 focus-within:bg-zinc-100  mt-1"
              >
                <ArrowLeft className="size-4" /> Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
