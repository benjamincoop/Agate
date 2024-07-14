import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdOutlineMenu } from "react-icons/md";
import "./sidebar-nav.css";
 
export default function SidebarNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="menuButton">
              <MdOutlineMenu />
          </Button>
      </SheetTrigger>
      <SheetContent side='left'>
      </SheetContent>
    </Sheet>
  );
}