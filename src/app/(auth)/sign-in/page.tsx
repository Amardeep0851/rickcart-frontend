"use client";
import { z } from "zod";
import clsx from "clsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

const schema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type FormValues = z.infer<typeof schema>;


function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>({
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
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setError(data?.error || "Registration failed");
          setLoading(false);
          return;
        }
        setSuccess(true);
      } catch (e) {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    }
  
  return (
   
      <Card className="w-full max-w-md mt-4 bg-zinc-900/50 border border-zinc-700 shadow-lg">
        <CardHeader className="pb-0">
          <CardTitle className="text-center text-zinc-100">
            Log in your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 cursor-pointer text-blue-400 hover:text-blue-300"
            >
              <Icons.facebook className="w-5 h-5" />
              <span>Facebook</span>
            </Button>
            <Button
              variant="outline"
              className="flex-1 cursor-pointer text-yellow-500 hover:text-yellow-400"
            >
              <Icons.google className="w-5 h-5" />
              <span>Google</span>
            </Button>
          </div>

          <div className="flex items-center gap-3 my-4 text-sm text-zinc-400">
            <Separator className="flex-1" />
            <span className="whitespace-nowrap border-2 rounded-full inline-block p-1 px-2 text-zinc-200 text-lg">
              or
            </span>
            <Separator className="flex-1" />
          </div>

          {success ? (
            <div className="p-4 rounded bg-green-900 text-green-300">
              Check your email for verification link.
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <Label htmlFor="email" className="text-zinc-300  pb-2">
                  Email address
                </Label>
                <Input
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email address"
                  className="mt-1 bg-zinc-800 text-zinc-100"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-zinc-300  pb-2">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter your password"
                    className="mt-1 bg-zinc-800 text-zinc-100 pr-10"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
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
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {error && <div className="text-red-400 text-sm">{error}</div>}

              <div>
                <Button
                  type="submit"
                  className="w-full font-semibold shadow-md cursor-pointer "
                  disabled={loading}
                >
                  {loading ? (
                    <Icons.loader className="ml-2 w-4 h-4 animate-spin text-orange-600" />
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Log In</span>
                    </div>
                  )}
                </Button>
              </div>

              <div className="text-center text-sm text-zinc-400">
                Don't have account?{" "}
                <a href="/auth/login" className="text-orange-600 ">
                  Create New Account
                </a>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="pt-0" />
      </Card>
  )
}

export default SignInPage