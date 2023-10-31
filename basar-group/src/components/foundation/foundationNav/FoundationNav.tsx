import Link from "next/link";
import Icon, { HomeOutlined } from "@ant-design/icons";

export default function FoundationNav() {
  return (
    <nav className=" bg-gray-900  grid grid-flow-col justify-center justify-self-auto  gap-6">
      <Link
        href="/"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        {<HomeOutlined />}
      </Link>
      <Link
        href="/foundation/student"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        শিক্ষার্থী
      </Link>
      <Link
        href="/foundation/farmer"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        কৃষক
      </Link>
      <Link
        href="/foundation/career"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        ক্যারিয়ার
      </Link>
      <Link
        href="/foundation/law"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        আইনী সহায়তা
      </Link>
      <Link
        href="/foundation/food"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        খাদ্য
      </Link>
      <Link
        href="/foundation/dress"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        বস্ত্র
      </Link>
      <Link
        href="/foundation/residence"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        বাসস্থান
      </Link>
      <Link
        href="/foundation/treatment"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        চিকিৎসা
      </Link>
    </nav>
  );
}
