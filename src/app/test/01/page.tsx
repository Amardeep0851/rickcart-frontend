"use client"

import React, { useState, useEffect } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30); // 30 second countdown
  const [canResend, setCanResend] = useState(false);

  // Countdown logic
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

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    // Add your resend API call here
    console.log("Resending code...");
  };

  const handleVerify = () => {
    console.log("Verifying:", otp);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Card className="w-full max-w-md bg-[#1a1a1a] border-gray-800 shadow-2xl relative z-10">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-2">
            <Mail className="w-6 h-6 text-orange-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">Verify your email</CardTitle>
          <CardDescription className="text-gray-400">
            We sent a 6-digit code to <span className="font-medium text-white">em.amar***@gmail.com</span>.
            <br />
            Enter it below to confirm your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center space-y-6">
          {/* THE OTP INPUT - Shadcn Component */}
          <InputOTP 
            maxLength={6} 
            value={otp} 
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} className="h-12 w-12 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20" />
              <InputOTPSlot index={1} className="h-12 w-12 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20" />
              <InputOTPSlot index={2} className="h-12 w-12 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20" />
            </InputOTPGroup>
            <InputOTPSeparator className="text-gray-600" />
            <InputOTPGroup>
              <InputOTPSlot index={3} className="h-12 w-12 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20" />
              <InputOTPSlot index={4} className="h-12 w-12 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20" />
              <InputOTPSlot index={5} className="h-12 w-12 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20" />
            </InputOTPGroup>
          </InputOTP>

          {/* Resend Timer */}
          <div className="text-sm text-center">
            {canResend ? (
              <button 
                onClick={handleResend}
                className="text-orange-500 hover:text-orange-400 font-medium hover:underline transition-all"
              >
                Resend Code
              </button>
            ) : (
              <span className="text-gray-500">
                Resend code in <span className="text-white font-mono">{timer}s</span>
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button 
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold h-11"
            onClick={handleVerify}
            disabled={otp.length < 6}
          >
            Verify Email
          </Button>
          
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5">
             <ArrowLeft className="w-4 h-4 mr-2" />
             Back to Signup
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}