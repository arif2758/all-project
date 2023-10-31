import FoundationNav from "@/components/foundation/foundationNav/foundationNav";

export default function layoutFoundation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <FoundationNav />
      {children}
    </div>
  );
}
