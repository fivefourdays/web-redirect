"use client";

import { url } from "inspector";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const newUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (!newUrl) return;
    router.replace(newUrl); // or router.push()
  }, [newUrl, router]);

  return null;
}
