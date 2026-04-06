import { LoginSchema } from "@/types/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const result = LoginSchema.safeParse(body);

  if (!result.success) {
    const serverErrors = Object.fromEntries(
      result.error.issues.map((issue) => [issue.path[0], issue.message]),
    );
    return NextResponse.json({ errors: serverErrors }, { status: 400 });
  }

  const apiBaseUrl = process.env.API_BASE_URL;
  const loginPath = process.env.API_LOGIN_PATH ?? "/auth/login";

  if (!apiBaseUrl) {
    return NextResponse.json(
      {
        errors: {
          email: "Server is missing API_BASE_URL configuration",
        },
      },
      { status: 500 },
    );
  }

  const loginUrl = new URL(
    loginPath,
    apiBaseUrl.endsWith("/") ? apiBaseUrl : `${apiBaseUrl}/`,
  ).toString();

  try {
    const backendResponse = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    const payload = await backendResponse.json().catch(() => ({}));

    if (!backendResponse.ok) {
      return NextResponse.json(
        {
          errors: (payload as { errors?: Record<string, string> }).errors ?? {
            email: (payload as { message?: string }).message ?? "Login failed",
          },
        },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json((payload as object) ?? { success: true }, {
      status: backendResponse.status,
    });
  } catch {
    return NextResponse.json(
      {
        errors: {
          email: "Unable to reach login service",
        },
      },
      { status: 502 },
    );
  }
}
