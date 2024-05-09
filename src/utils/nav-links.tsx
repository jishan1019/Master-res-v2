import { BiDish, BiSolidDiscount, Fa6Icons, FaUsers, GoGear, LuUser2, MdOutlineRateReview, MdOutlineRestaurantMenu, MdOutlineTableRestaurant, RiHome6Line, TbReportAnalytics } from "@/constant";

export const dashboardNavLinks = [
          {
                    href: "/dashboard",
                    icon: <RiHome6Line size={20} />,
                    label: "Dashboard",
                    roles: ["admin", "user"],
          },
          {
                    href: "/dashboard/orders-management",
                    icon: <BiDish size={20} />,
                    label: "Orders Management",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/table-booking",
                    icon: <MdOutlineTableRestaurant size={20} />,
                    label: "Table Booking",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/static-report",
                    icon: <TbReportAnalytics size={20} />,
                    label: "Static Report",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/slots-management",
                    icon: <Fa6Icons.FaCheckToSlot size={20} />,
                    label: "Slots Management",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/menu-management",
                    icon: <MdOutlineRestaurantMenu size={20} />,
                    label: "Menu Management",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/manage-discount",
                    icon: <BiSolidDiscount size={20} />,
                    label: "Manage Discount",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/manage-reviews",
                    icon: <MdOutlineRateReview size={20} />,
                    label: "Manage Reviews",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/manage-users",
                    icon: <FaUsers size={20} />,
                    label: "Manage Users",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/settings",
                    icon: <GoGear size={20} />,
                    label: "Settings",
                    roles: ["admin", "user"],
                    isHidden: true,
          },
          {
                    href: "/dashboard/profile",
                    icon: <LuUser2 size={20} />,
                    label: "Profile",
                    roles: ["admin", "user"],
                    isHidden: true,
          },
          {
                    href: "/dashboard/my-orders",
                    icon: <BiDish size={20} />,
                    label: "My Orders",
                    roles: ["user"],
          },
          {
                    href: "/dashboard/book-table",
                    icon: <MdOutlineTableRestaurant size={20} />,
                    label: "Book Table",
                    roles: ["user"],
          },
];

export const navLinks = [
          {
                    name: "Home",
                    href: "/",
          },
          {
                    name: "About",
                    href: "/about",
          },
          {
                    name: "Menu",
                    href: "/menu",
          },
          {
                    name: "Services",
                    href: "/services",
          },
          {
                    name: "Booking",
                    href: "#",
          },
];