import { NavCard } from "./components/navcard";
import { navItems } from "./nav-items";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <h1 className="text-4xl text-gray-800 font-bold mb-12 text-center">
        Welcome to the Voting App
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {navItems.map((item) => (
          <NavCard key={item.href} href={item.href} label={item.label} />
        ))}
      </div>
    </div>
  );
}
