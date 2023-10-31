import ShopNav from "@/components/shop/shopNav/ShopNav";
import React from "react";

export default function layoutShop({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <ShopNav/>
    {children}</div>;
}
