import { HiPresentationChartBar, MdManageAccounts, MdManageSearch, MdOutlineManageHistory, MdOutlineRateReview, MdOutlineRestaurantMenu, TbDiscountCheckFilled, TbHomeShield } from "@/constant";
import { FaCheckToSlot } from "react-icons/fa6";

export const navLinks = [
          {
                    href: "/dashboard",
                    icon: <TbHomeShield size={20} />,
                    label: "Dashboard",
          },
          {
                    href: "/dashboard/orders-management",
                    icon: <MdManageSearch size={20} />,
                    label: "Orders Management",
          },
          {
                    href: "/dashboard/table-booking",
                    icon: <MdOutlineRestaurantMenu size={20} />,
                    label: "Table Booking",
          },
          {
                    href: "/dashboard/static-report",
                    icon: <HiPresentationChartBar size={20} />,
                    label: "Static Report",
          },
          {
                    href: "/dashboard/slots-management",
                    icon: <FaCheckToSlot size={20} />,
                    label: "Slots Management",
          },
          {
                    href: "/dashboard/manage-dish",
                    icon: <MdOutlineManageHistory size={20} />,
                    label: "Manage Dish",
          },
          {
                    href: "/dashboard/manage-discount",
                    icon: <TbDiscountCheckFilled size={20} />,
                    label: "Manage Discount",
          },
          {
                    href: "/dashboard/manage-reviews",
                    icon: <MdOutlineRateReview size={20} />,
                    label: "Manage Reviews",
          },
          {
                    href: "/dashboard/manage-users",
                    icon: <MdManageAccounts size={20} />,
                    label: "Manage Users",
          },
];