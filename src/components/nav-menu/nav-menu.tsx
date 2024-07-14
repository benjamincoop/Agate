import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdOutlineMenu } from "react-icons/md";
import "./nav-menu.css";
 
export default function NavMenu() {
  return (
    <Sheet>
    <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="menuButton">
            <MdOutlineMenu />
        </Button>
    </SheetTrigger>
    <SheetContent side='left'>
        <SheetHeader>
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>
            Put some navigation links here
        </SheetDescription>
        <ul>
            <li>Home</li>
            <li>Intranet</li>
            <li>Media</li>
            <li>Bulletins</li>
            <li>Games</li>
        </ul>
        </SheetHeader>
        <SheetFooter>
        </SheetFooter>
    </SheetContent>
    </Sheet>
  )
}