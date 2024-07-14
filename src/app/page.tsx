import { Button } from "@/components/ui/button"
import SpiralDecor from "@/components/spiral-decor/spiral-decor";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
 
export default function Home() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Put some navigation links here
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <SpiralDecor></SpiralDecor>
    </>
  )
}