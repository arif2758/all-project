import ItNav from "@/components/it/itNav/ItNav";
import React from "react";

export default function layoutIt({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    
    <ItNav/>
    {children}</div>;
}
