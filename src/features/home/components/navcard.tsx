import Link from "next/link";

interface NavCardProps {
  href: string;
  label: string;
}

export function NavCard({ href, label }: NavCardProps) {
  return (
    <Link href={href}>
      <div className="bg-gray-800 text-gray-100 px-6 py-4 rounded-lg shadow-md text-center hover:bg-gray-700 hover:shadow-lg transition">
        {label}
      </div>
    </Link>
  );
}
