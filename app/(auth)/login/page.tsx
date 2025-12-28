"use client";

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Loader2, Terminal } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { AuroraText } from "@/components/ui/aurora-text";

type Props = {};

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginPage = (props: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(data: LoginFormValues) {
    // UI-only: szimulálunk egy login requestet
    startTransition(async () => {
      await new Promise((r) => setTimeout(r, 800));
      toast.success("UI only: Login clicked");
      router.push("/"); // ha nem akarsz navigálni, ezt töröld
    });
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4">
      <Card className="w-full bg-background/60 backdrop-blur-xl border-white/10 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center">
            <div className="flex flex-1 items-center justify-start">
              <Terminal size={40} />
              <h1 className="text-4xl font-bold items-center">
                <span className="text-4xl font-bold">TIPSTER</span>
                <AuroraText>PRO </AuroraText>
              </h1>
            </div>
          </CardTitle>
          <CardDescription>Get Started Right Now</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup className="gap-y-4">
              <Controller
                name="email"
                control={form.control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      placeholder="john.doe@example.com"
                      autoComplete="email"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                rules={{
                  required: "Password is required",
                  minLength: { value: 6, message: "Min. 6 characters" },
                }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      placeholder="********"
                      type="password"
                      autoComplete="current-password"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    Loading...
                  </span>
                ) : (
                  "Login"
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="text-foreground underline underline-offset-4 hover:opacity-80"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </button>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Forget your password?
                <button
                  type="button"
                  className="text-foreground underline underline-offset-4 hover:opacity-80"
                  onClick={() => router.push("/login")}
                >
                  Click here
                </button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
        <BorderBeam duration={8} size={100} />
      </Card>
    </div>
  );
};

export default LoginPage;
