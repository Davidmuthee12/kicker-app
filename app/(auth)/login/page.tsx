"use client";

import AuthImage from "@/components/Auth/AuthImage";
import FormField from "@/components/Auth/FormFields";
import { LoginFormData, LoginSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema) });

  const loginEndpoint =
    process.env.NEXT_PUBLIC_LOGIN_API_ENDPOINT?.trim() || "/api/login";

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        errors?: Partial<Record<keyof LoginFormData, string>>;
      };

      if (!response.ok) {
        if (payload.errors?.email) {
          setError("email", {
            type: "server",
            message: payload.errors.email,
          });
          return;
        }

        if (payload.errors?.password) {
          setError("password", {
            type: "server",
            message: payload.errors.password,
          });
          return;
        }

        setError("email", {
          type: "server",
          message: "Unable to login with these credentials",
        });
        return;
      }

      router.push("/");
    } catch {
      setError("email", {
        type: "server",
        message: "Unable to reach login service",
      });
    }
  };

  return (
    <div className="grid h-dvh w-full grid-cols-1 overflow-hidden md:grid-cols-2">
      <AuthImage />

      <div className="flex h-full w-full items-start justify-center overflow-y-auto bg-stone-50 px-10 py-8 md:px-16 md:py-10">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
              Welcome back
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
              Sign in to your account
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-zinc-500">
                Email address
              </label>
              <FormField
                type="email"
                placeholder="example@gmail.com"
                name="email"
                register={register}
                error={errors.email}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-zinc-500">
                Password
              </label>
              <FormField
                type="password"
                placeholder="Your password"
                name="password"
                register={register}
                error={errors.password}
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-xl bg-zinc-900 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-zinc-700 active:translate-y-0"
            >
              Sign In
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="text-xs text-zinc-400">or</span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <p className="text-center text-xs text-zinc-400">
            New here?{" "}
            <Link
              href="/register"
              className="font-semibold text-zinc-900 hover:underline"
            >
              Create account →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
