"use client";

import FormField from "@/components/Auth/FormFields";
import { FormData, ValidFieldNames } from "@/types/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/types/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(UserSchema) });

  const registerEndpoint =
    process.env.NEXT_PUBLIC_REGISTER_API_ENDPOINT?.trim() || "/api/form";

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(registerEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        errors?: Partial<Record<ValidFieldNames, string>>;
      };

      const fieldErrorMapping: Record<string, ValidFieldNames> = {
        name: "name",
        email: "email",
        password: "password",
        confirmPassword: "confirmPassword",
      };

      const firstFieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => {
          return payload.errors?.[field as ValidFieldNames];
        },
      );

      if (!response.ok && firstFieldWithError) {
        setError(fieldErrorMapping[firstFieldWithError], {
          type: "server",
          message: payload.errors?.[firstFieldWithError as ValidFieldNames],
        });
        return;
      }

      if (!response.ok) {
        setError("email", {
          type: "server",
          message: "Registration failed. Please try again.",
        });
        return;
      }

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const passwordsMatch =
    !password || !confirmPassword || password === confirmPassword;

  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, label: "", colorClass: "" };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    const levels = [
      { label: "Weak", colorClass: "bg-red-500 text-red-500" },
      { label: "Fair", colorClass: "bg-orange-400 text-orange-400" },
      { label: "Good", colorClass: "bg-yellow-400 text-yellow-500" },
      { label: "Strong", colorClass: "bg-green-500 text-green-500" },
    ];
    return { score, ...levels[Math.min(score - 1, 3)] };
  };

  const strength = getPasswordStrength(password);

  const strengthBarColor = (index: number) => {
    if (!password || index > strength.score) return "bg-gray-200";
    const colors = [
      "bg-red-500",
      "bg-orange-400",
      "bg-yellow-400",
      "bg-green-500",
    ];
    return colors[strength.score - 1] ?? "bg-gray-200";
  };

  return (
    <div className="flex h-dvh w-full min-h-0 overflow-hidden">
      <div className="flex h-full w-full overflow-y-auto items-start justify-center bg-stone-50 px-10 py-8 md:px-16 md:py-10">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
              Get started — it&apos;s free
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
              Create your account
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-zinc-500">
                Full name
              </label>
              <FormField
                type="text"
                placeholder="Full name"
                name="name"
                register={register}
                error={errors.name}
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-zinc-500">
                Password
              </label>
              <FormField
                type="password"
                placeholder="Min. 8 characters"
                name="password"
                register={register}
                error={errors.password}
              />

              {/* Strength meter */}
              {password && (
                <div className="mt-1 flex flex-col gap-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${strengthBarColor(i)}`}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-xs font-medium ${strength.colorClass.split(" ")[1]}`}
                  >
                    {strength.label} password
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-zinc-500">
                Confirm password
              </label>
              <FormField
                type="password"
                placeholder="Repeat your password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
              />

              {!passwordsMatch && (
                <p className="flex items-center gap-1 text-xs text-red-500">
                  <span>✕</span> Passwords do not match
                </p>
              )}
              {confirmPassword && passwordsMatch && (
                <p className="flex items-center gap-1 text-xs text-green-500">
                  <span>✓</span> Passwords match
                </p>
              )}
            </div>

            {/* Terms */}
            <p className="text-xs leading-relaxed text-zinc-400">
              By creating an account, you agree to our{" "}
              <Link
                href="#"
                className="font-medium text-indigo-500 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="font-medium text-indigo-500 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 w-full rounded-xl bg-zinc-900 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-zinc-700 active:translate-y-0"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="text-xs text-zinc-400">or</span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          {/* Sign in link */}
          <p className="text-center text-xs text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-zinc-900 hover:underline"
            >
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
