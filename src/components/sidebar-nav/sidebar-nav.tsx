import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { MdOutlineMenu } from "react-icons/md";
import "./sidebar-nav.css";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";
import { Separator } from "@/src/components/ui/separator";
 
export default function SidebarNav() {
  const menu: { title: string; children: { title: string; href: string}[] }[] = [
    {
      title: 'Information',
      children: [
        {
          title: 'News',
          href: ''
        },
        {
          title: 'Weather',
          href: ''
        }
      ]
    },
    {
      title: 'Media',
      children: [
        {
          title: 'Movies',
          href: ''
        },
        {
          title: 'Music',
          href: ''
        },
        {
          title: 'Photos',
          href: ''
        }
      ]
    },
    {
      title: 'Games',
      children: [
        {
          title: 'Chess',
          href: ''
        },
        {
          title: 'Snake',
          href: ''
        }
      ]
    },
    {
      title: 'Utilities',
      children: [
        {
          title: 'Calendar',
          href: ''
        },
        {
          title: 'Notes',
          href: ''
        }
      ]
    },
    {
      title: 'Intranet',
      children: [
        {
          title: 'Proxmox VE',
          href: 'https://192.168.20:8006'
        },
        {
          title: 'OMV Workbench',
          href: 'https://apocrypha.local'
        },
        {
          title: 'Home Assistant',
          href: 'https://192.168.0.23:8123'
        },
        {
          title: 'Prometheus LED Fixture',
          href: 'http://prometheus.local'
        }
      ]
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="menuButton">
          <MdOutlineMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className="text-6xl font-thin">Agate</SheetTitle>
        </SheetHeader>
        <Separator className="mb-0 my-4"></Separator>
        <Accordion type="multiple" className="w-full">
          {menu.map((section) => (
            <AccordionItem key={section.title} value={section.title}>
              <AccordionTrigger className="text-lg font-extralight text-slate-400">{section.title}</AccordionTrigger>
              {section.children.map((menuItem) => (
                <AccordionContent key={menuItem.title}>
                  <a href={menuItem.href}>{menuItem.title}</a>
                </AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}