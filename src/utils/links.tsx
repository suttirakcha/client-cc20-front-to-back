import { LayoutDashboard, UserCog } from "lucide-react";
import type { ReactNode } from "react";

interface SidebarLink {
  label: string;
  link: string;
  icon: ReactNode;
}

export const sidebarLinks: SidebarLink[] = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: <LayoutDashboard />,
  },
  {
    label: "Manage Users",
    link: "/admin/manage",
    icon: <UserCog />,
  },
];
