"use client";
import { z } from "zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AlertCircle, X } from "lucide-react";

const schema = z.object({
  email: z.string().email("Invalid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type FormValues = z.infer<typeof schema>;


function SignInPage() {
  const route = useRouter();
   const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | null>(null);


  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    console.log("called");
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_WITHOUT_STORE}/auth/login`,
        values,
        {withCredentials:true}
      );
      if (response?.status === 200) {
        route.refresh()
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
  
  return (
    <motion.div
    className="w-full max-w-md mt-4"
    initial={{x:50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{
              duration:1
            }}
    >
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

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Email"
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
                  Don't have account? {" "}
                  <Link
                    href="/sign-up"
                    className="text-orange-600 font-medium "
                  >
                    Create New Account
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="pt-0" />
        </Card>
    </motion.div>
  )
}

export default SignInPage