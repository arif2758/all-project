import Link from "next/link";
import Icon, { HomeOutlined } from "@ant-design/icons";

export default function ShopNav() {
  return (
    <nav className=" bg-gray-900  grid grid-flow-col justify-center justify-self-auto  gap-6">
      <Link
        href="/"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        {<HomeOutlined />}
      </Link>
      <Link
        href="/shop/grocery"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        মুদি
      </Link>
      <Link
        href="/shop/raw-market"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        কাঁচাবাজার
      </Link>
      <Link
        href="/shop/fish"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        মাছ
      </Link>
      <Link
        href="/shop/chicken"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        মুরগীর মাংস
      </Link>
      <Link
        href="/shop/egg"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        ডিম
      </Link>
      <Link
        href="/shop/cleaner"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        পরিষ্কারক
      </Link>
      <Link
        href="/shop/biryani"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        বিরিয়ানি প্যাকেজ
      </Link>
    </nav>
  );
}
