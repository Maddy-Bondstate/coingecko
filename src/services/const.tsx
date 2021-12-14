export const menu = {
  dashboard: {
    name: "Dashboard",
    link: "/",
    icon: "fa-tv",
  },
  coin: [
    {
      name: "Coin List",
      link: "/coin/list",
      icon: "fa-chart-bar",
    },
    {
      name: "Coin Markets",
      link: "/coin/markets",
      icon: "fa-chart-line",
    },
  ],
};

export const sidebarLinkActive = {
  active: "text-sky-500 hover:text-sky-600",
  defaults: "text-slate-700 hover:text-slate-500",
  activeIcon: "opacity-75",
  defaultsIcon: "text-slate-400",
};
