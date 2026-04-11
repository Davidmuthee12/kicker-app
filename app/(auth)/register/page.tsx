"use client";

import AuthImage from "@/components/Auth/AuthImage";
import Form from "@/components/Auth/Form";

export default function Register() {
  return (
    <div className="grid h-dvh overflow-hidden w-full grid-cols-1 md:grid-cols-2">
      <AuthImage />
      <Form />
    </div>
  );
}
