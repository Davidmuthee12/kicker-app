This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Registration API Configuration

This project uses a two-step registration flow:

1. The client form submits to `NEXT_PUBLIC_REGISTER_API_ENDPOINT` (defaults to `/api/form`).
2. `app/api/form/route.ts` validates input and forwards it to your backend using `API_BASE_URL + API_REGISTER_PATH`.

Copy `.env.example` values into your local env file (for example `.env.local`) and set values per environment.

Example dev values:

```env
NEXT_PUBLIC_REGISTER_API_ENDPOINT=/api/form
API_BASE_URL=http://localhost:8080
API_REGISTER_PATH=/auth/register
```

Example production values:

```env
NEXT_PUBLIC_REGISTER_API_ENDPOINT=/api/form
API_BASE_URL=https://api.yourdomain.com
API_REGISTER_PATH=/auth/register
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
