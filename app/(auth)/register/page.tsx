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
import { BorderBeam } from "@/components/ui/border-beam";
import { AuroraText } from "@/components/ui/aurora-text";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Props = {};

type LoginFormValues = {
  email: string;
  password: string;
  telegramAccount: string;
};

const RegisterPage = (props: Props) => {
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
          <CardTitle>
            <div className="flex flex-1 items-center justify-start ">
              <Terminal size={40} />
              <h1 className="text-4xl font-bold items-center">
                <span className="text-4xl font-bold">TIPSTER</span>
                <AuroraText>PRO </AuroraText>
              </h1>
            </div>
          </CardTitle>
          <CardTitle className="w-full text-center">CREATE ACCOUNT</CardTitle>
          <CardDescription className="w-full text-center">
            start your journey right now
          </CardDescription>
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
              <Controller
                name="telegramAccount"
                control={form.control}
                rules={{
                  required: "Password is required",
                  minLength: { value: 6, message: "Min. 6 characters" },
                }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Telegram account</FieldLabel>
                    <Input
                      placeholder=""
                      type="text"
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

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <Checkbox id="terms-2" defaultChecked />
                  <div className="grid gap-2">
                    <Label htmlFor="terms-2">Accept terms and conditions</Label>
                    <p className="text-muted-foreground text-sm">
                      By clicking this checkbox, you agree to the terms and
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    Loading...
                  </span>
                ) : (
                  "Create an account"
                )}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                Already has an account?
                <button
                  type="button"
                  className="text-foreground underline underline-offset-4 hover:opacity-80"
                  onClick={() => router.push("/login")}
                >
                  Log in
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

export default RegisterPage;
