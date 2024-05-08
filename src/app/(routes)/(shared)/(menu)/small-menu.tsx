import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { Fa6Icons } from "@/constant";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

export default function SmallMenu() {
  const user = useAppSelector(selectUser);
  const role = user?.role;

  return (
    <>
      <h3 className="font-bold text-3xl text-destructive dark:text-primary text-center mt-3">
        Menu
      </h3>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="border-b-2 border-primary/25" value="item-1">
          <AccordionTrigger className="text-destructive dark:text-primary font-semibold text-lg">
            Staters
          </AccordionTrigger>

          <AccordionContent className=" font-semibold text-xs border-b mb-2">
            Category Des: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </AccordionContent>

          <AccordionContent className="border-b-2 mb-2">
            <h5 className="font-bold text-[15px]">Chicken Tikka</h5>
            <p className="text-xs font-semibold">
              Item Des: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.
            </p>

            <div className="flex justify-end items-center space-x-4">
              <p className="font-semibold">
                {Config.currency}
                {role === "admin" ? "4.20" : "3.80"}
              </p>

              <Button className="bg-destructive dark:bg-primary" size="sm">
                <Fa6Icons.FaPlus className="text-xl text-primary-foreground" />
              </Button>
            </div>
          </AccordionContent>

          <AccordionContent className="border-b-2">
            <h5 className="font-bold text-[15px]">Chicken Tikka</h5>
            <p className="text-xs font-semibold">
              Item Des: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.
            </p>

            <div className="flex justify-end items-center space-x-4">
              <p className="font-semibold">
                {Config.currency}
                {role === "admin" ? "4.20" : "3.80"}
              </p>

              <Button className="bg-destructive dark:bg-primary" size="sm">
                <Fa6Icons.FaPlus className="text-xl text-primary-foreground" />
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
