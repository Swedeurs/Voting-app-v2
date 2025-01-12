export type NavItem = {
    href: string;
    label: string;
  };
  
export const navItems: NavItem[] = [
  { href: "/elections/1", label: "View Elections" },
  { href: "/representatives", label: "Manage Representatives" },
  { href: "/concluded", label: "View Concluded Elections" },
];
