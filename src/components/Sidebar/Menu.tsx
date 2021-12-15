import { Link, useLocation } from "react-router-dom";
import { sidebarLinkActive } from "../../services/const";

interface MenuProps {
  url: string;
  icon: string;
  name: string;
}

export const Menu = ({ url, icon, name }: MenuProps) => {
  const location = useLocation();
  const linkActive = (pathname: string, isIcon: boolean, icon: string = "") => {
    return isIcon
      ? location.pathname === pathname
        ? `${sidebarLinkActive.activeIcon} ${icon}`
        : `${sidebarLinkActive.defaultsIcon} ${icon}`
      : location.pathname === pathname
      ? sidebarLinkActive.active
      : sidebarLinkActive.defaults;
  };

  return (
    <li className="items-center">
      <Link
        className={`text-xs uppercase py-3 font-bold block ${linkActive(
          url,
          false
        )}`}
        to={url}
      >
        <i className={`fas mr-2 text-sm ${linkActive(url, true, icon)}`}></i>
        {name}
      </Link>
    </li>
  );
};
