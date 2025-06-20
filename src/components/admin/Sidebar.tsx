import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";
import { sidebarLinks } from "../../utils/links";
import useAuthStore from "../../store/useAuthStore";

function Sidebar() {
  const user = useAuthStore(state => state.user);
  return (
    <div className="bg-pink-900 text-white w-60">
      {/* Profile */}
      <div className="flex flex-col py-12 items-center">
        <CircleUserRound size={48} />
        <p>Welcome {user?.role}</p>
      </div>

      {/* Navlink */}
      <nav className="flex flex-col">
        {sidebarLinks.map((link) => (
          <Link
            to={link.link}
            key={link.label}
            className="flex gap-2 p-4 hover:bg-pink-800"
          >
            <span>{link.icon}</span>
            <p>{link.label}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
