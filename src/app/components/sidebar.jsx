"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    Challenges: true,
  });

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change color after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Datasets",
      children: [{ name: "OpenEvents V1", link: "/openevents-v1" }],
    },
    {
      name: "Challenges",
      children: [{ name: "Eventa 2025", link: "/eventa-2025" }],
    },
  ];

  return (
    <div className="flex">
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className={`p-2 m-2 fixed border rounded-md top-4 left-4 z-50 transition-colors ${
            isScrolled ? "bg-gray-700 hover:bg-gray-500 text-white" : "bg-white hover:bg-gray-200 text-[#790819]"
          }`}
        >
          <Menu size={20} />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-4 transition-transform ${
          isSidebarOpen ? "w-64" : "-translate-x-full"
        }`}
      >
        {isSidebarOpen && (
          <div className="w-full flex flex-row justify-end">
            <button
              onClick={toggleSidebar}
              className={`p-2 m-2 hover:bg-gray-700 rounded-md transition-colors bg-gray-900 `}
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        )}

        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-700"
                  >
                    <span className="flex items-center gap-2">{item.name}</span>
                    {openMenus[item.name] ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  {openMenus[item.name] && (
                    <ul className="ml-4 mt-2">
                      {item.children.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-1">
                          <Link
                            href={subItem.link}
                            className={`block p-2 rounded-md hover:bg-gray-700 ${
                              pathname === subItem.link ? "bg-gray-700" : ""
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 ${
                    pathname === item.link ? "bg-gray-700" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
