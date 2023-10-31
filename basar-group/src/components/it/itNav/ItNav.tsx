"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon, { HomeOutlined } from "@ant-design/icons";

export default function ItNav() {
  const pathname = usePathname();
  return (
    <nav
      className={`bg-gray-900  grid grid-flow-col justify-center justify-self-auto  gap-6 `}
    >
      <Link
        href="/"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        {<HomeOutlined />}
      </Link>
      <Link
        href="/it/park"
        className={`link ${
          pathname === "/it/park" ? "active" : ""
        } "no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"`}
      >
        আইটি পার্ক
      </Link>
      <Link
        href="/it/online"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        অনলাইন সেবা
      </Link>
      <Link
        href="/it/training"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        ট্রেনিং
      </Link>
      <Link
        href="/it/guidelines"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        শিক্ষার্থী গাইডলাইন
      </Link>
      <Link
        href="/it/problems-solve"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        শিক্ষার্থীর সমাস্যা সমাধান
      </Link>
    </nav>
  );
}
