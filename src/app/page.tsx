import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_REDIRECT_URL;

export default function Home() {
  if (!url) {
    throw new Error("NEXT_PUBLIC_REDIRECT_URL is not defined");
  }
  redirect(url);
}
