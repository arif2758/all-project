import Link from "next/link";
import Icon, { HomeOutlined } from "@ant-design/icons";

export default function GranthagarNav() {
  return (
    <nav className=" bg-gray-900  grid grid-flow-col justify-center justify-self-auto  gap-6">
      <Link
        href="/"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        {<HomeOutlined />}
      </Link>
      <Link
        href="/granthagar/books"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        বই
      </Link>
      <Link
        href="/granthagar/writers"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        লেখক
      </Link>
      <Link
        href="/granthagar/subjects"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        বিষয়
      </Link>
      <Link
        href="/granthagar/publisher"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        প্রকাশনী
      </Link>
      <Link
        href="/granthagar/english"
        className="no-underline text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      >
        ইংরেজী শিক্ষা
      </Link>
    </nav>
  );
}
