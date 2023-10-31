import GranthagarNav from "@/components/granthagar/granthagarNav/GranthagarNav";
import React from "react";

export default function layoutGranthagar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <GranthagarNav />
      {children}
    </div>
  );
}
