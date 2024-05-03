import { GoGear, HiPresentationChartBar, LuUser2, MdManageAccounts, MdManageSearch, MdOutlineManageHistory, MdOutlineRateReview, MdOutlineRestaurantMenu, TbDiscountCheckFilled, TbHomeShield } from "@/constant";
import { FaCheckToSlot } from "react-icons/fa6";

export const navLinks = [
          {
                    href: "/dashboard",
                    icon: <TbHomeShield size={20} />,
                    label: "Dashboard",
                    roles: ["admin", "user"],
          },
          {
                    href: "/dashboard/orders-management",
                    icon: <MdManageSearch size={20} />,
                    label: "Orders Management",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/table-booking",
                    icon: <MdOutlineRestaurantMenu size={20} />,
                    label: "Table Booking",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/static-report",
                    icon: <HiPresentationChartBar size={20} />,
                    label: "Static Report",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/slots-management",
                    icon: <FaCheckToSlot size={20} />,
                    label: "Slots Management",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/manage-dish",
                    icon: <MdOutlineManageHistory size={20} />,
                    label: "Manage Dish",
                    roles: ["admin"],
          },
          {
                    href: "/dashboard/manage-discount",
                    icon: <TbDiscountCheckFilled size={20} />,
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
                    icon: <MdManageAccounts size={20} />,
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
                    icon: <MdManageSearch size={20} />,
                    label: "My Orders",
                    roles: ["user"],
          },
          {
                    href: "/dashboard/book-table",
                    icon: <MdOutlineRestaurantMenu size={20} />,
                    label: "Book Table",
                    roles: ["user"],
          },
];