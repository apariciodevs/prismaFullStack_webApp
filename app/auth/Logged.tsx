"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { type } from "os";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex items-center gap-8">
      <button
        onClick={() => signOut()}
        className="px-6 py-2 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-xl disabled:opacity-25 hover:opacity-80"
      >
        Sign out
      </button>
      <Link href={"/dashboard"}>
        <Image
          src={image}
          width={64}
          height={64}
          alt={"user image"}
          priority
          className="rounded-xl"
        />
      </Link>
    </li>
  );
}
