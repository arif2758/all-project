import Link from "next/link";
import Icon, { HomeOutlined } from "@ant-design/icons";

export default function Navbrar() {
  return (
    <nav className=" bg-gray-900  grid grid-flow-col justify-center justify-self-auto  gap-6">
      <Link
        href="/"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        {<HomeOutlined />}
      </Link>
      <Link
        href="/granthagar"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        গ্রন্থাগার
      </Link>
      <Link
        href="/foundation"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        ফাউন্ডেশন
      </Link>
      <Link
        href="/shop"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        শপ
      </Link>
      <Link
        href="/it"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        {" "}
        আইটি সেন্টার
      </Link>
    </nav>
  );
}
