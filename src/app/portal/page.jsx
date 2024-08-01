"use server";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  Calendar,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  ClipboardList,
  Users2,
} from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function Page() {
  const session = await auth();
  if (session) {
    return (
      <>
        <TooltipProvider className="flex min-h-screen w-full flex-col bg-muted/40">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <Link
                href="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center bg-accent rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg  text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Orders</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Orders</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Package className="h-5 w-5" />
                    <span className="sr-only">Products</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Products</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Customers</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Customers</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Analytics</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Analytics</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">Jobstream</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-foreground "
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Settings
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="#">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="relative ml-auto flex-1 md:grow-0"></div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    <Image
                      src="/placeholder-user.jpg"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
          </div>
          <main className=" flex flex-row sm:gap-4 sm:py-4 sm:pl-14">
            <div className="flex flex-col flex-1 gap-4">
              <h1 className="text-3xl font-bold ml-6">Welcome, Timmy Cow</h1>
              <div className="mx-6 md:w-[1200px] grid grid-cols-2 md:grid-cols-6 gap-4">
                <Card className="md:col-start-1 md:row-start-1">
                  <a href="/">
                    <CardHeader className="pb-2">
                      <CardDescription>Designing</CardDescription>
                      <CardTitle className="text-4xl">55%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        80 More To Go
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={55} aria-label="25% increase" />
                    </CardFooter>
                  </a>
                </Card>
                <Card className="md:col-start-2 md:row-start-1">
                  <a href="/">
                    <CardHeader className="pb-2">
                      <CardDescription>Video Editing</CardDescription>
                      <CardTitle className="text-4xl">35%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        20 More To Go
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={35} aria-label="25% increase" />
                    </CardFooter>
                  </a>
                </Card>

                <Card className="md:col-start-1 md:row-start-2">
                  <a href="/">
                    <CardHeader className="pb-2">
                      <CardDescription>Writing</CardDescription>
                      <CardTitle className="text-4xl">20%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        16 More To Go
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={20} aria-label="25% increase" />
                    </CardFooter>
                  </a>
                </Card>

                <Card className="md:col-start-2 md:row-start-2">
                  <a href="/">
                    <CardHeader className="pb-2">
                      <CardDescription>Developing</CardDescription>
                      <CardTitle className="text-4xl">95%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        2 More To Go
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={95} aria-label="25% increase" />
                    </CardFooter>
                  </a>
                </Card>
                <Card className="md:col-start-1 md:row-start-3">
                  <a href="/">
                    <CardHeader className="pb-2">
                      <CardDescription>Management</CardDescription>
                      <CardTitle className="text-4xl">0%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        Not Started
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={0} aria-label="25% increase" />
                    </CardFooter>
                  </a>
                </Card>
                <Card className="col-span-2 row-span-2 md:row-start-1 md:col-start-3">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>
                      Don't miss out on these upcoming events!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                    <div className="grid gap-4">
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Developing Workshop</div>
                          <div className="text-sm text-muted-foreground">
                            June 15, 2024 · 7:00 PM
                          </div>
                        </div>
                        <div
                          href="/"
                          className="text-sm text-muted-foreground hover:text-accent-foreground"
                        >
                          Cutter
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Design Meetup</div>
                          <div className="text-sm text-muted-foreground">
                            July 20, 2024 · 6:30 PM
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          The King
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Tech Conference</div>
                          <div className="text-sm text-muted-foreground">
                            September 5-7, 2024
                          </div>
                        </div>
                        <div
                          href="/"
                          className="text-sm text-muted-foreground hover:text-accent-foreground"
                        >
                          Karammaev
                        </div>
                      </a>{" "}
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Marketing Workshop</div>
                          <div className="text-sm text-muted-foreground">
                            October 12, 2024 · 9:00 AM
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Kishkan
                        </div>
                      </a>
                      
                    </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
                <Card className="col-span-2 row-span-2 md:row-start-1 md:col-start-5">
                  <CardHeader>
                    <CardTitle>Assignments</CardTitle>
                    <CardDescription>
                      Assignments for each catergory.
                    </CardDescription>
                    <CardContent>
                        <Tabs defaultValue="designing">
                        <div className="-ml-6">                        
                            <TabsList className="">
                            <TabsTrigger value="designing" className='p-1 text-[10px]'>Designing</TabsTrigger>
                            <TabsTrigger value="video Editing" className='p-1 text-[10px]'>Video Editing</TabsTrigger>
                            <TabsTrigger value="writing" className='p-1 text-[10px]'>Writing</TabsTrigger>
                            <TabsTrigger value="development" className='p-1 text-[10px]'>Development</TabsTrigger>
                            <TabsTrigger value="management" className='p-1 text-[10px]'>Management</TabsTrigger>
                        </TabsList>
                        <TabsContent value="designing">
                        <ScrollArea className="h-[200px] grid gap-4">
                        <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Figma Basics</div>
                          <div className="text-sm text-muted-foreground">
                            Module 12 · Figma
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Kishkan
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Luancy Basics</div>
                          <div className="text-sm text-muted-foreground">
                            Module 13 · Luancy
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          The King
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Figma Mastery</div>
                          <div className="text-sm text-muted-foreground">
                            Module 10 · Figma
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cutter
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Bento Grid Layout</div>
                          <div className="text-sm text-muted-foreground">
                            Module 12 · Figma
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cali
                        </div>
                      </a>
                        </ScrollArea>
                        </TabsContent>

                        <TabsContent value="development">
                        <ScrollArea className="h-[200px] grid gap-4">
                        <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">JavaScript Fundamentals</div>
                          <div className="text-sm text-muted-foreground">
                            Module 5 · JavaScript
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          The King
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">React Basics</div>
                          <div className="text-sm text-muted-foreground">
                            Module 8 · React
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cutter
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Python for Beginners</div>
                          <div className="text-sm text-muted-foreground">
                            Module 3 · Python
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cali
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">CSS Grid Mastery</div>
                          <div className="text-sm text-muted-foreground">
                            Module 6 · CSS
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Kishkan
                        </div>
                      </a>
                        </ScrollArea>
                        </TabsContent>

                        <TabsContent value="video Editing">
                        <ScrollArea className="h-[200px] grid gap-4">
                        <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Digital Editing</div>
                          <div className="text-sm text-muted-foreground">
                            Module 2 · Video Editing
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          The King
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Social Editing Strategy</div>
                          <div className="text-sm text-muted-foreground">
                            Module 7 · Social Media
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                        Kishkan                        
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Content Editing</div>
                          <div className="text-sm text-muted-foreground">
                            Module 4 · Content
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cali
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Davinci Fundamentals</div>
                          <div className="text-sm text-muted-foreground">
                            Module 9 · Video Editing
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          The King
                        </div>
                      </a>
                        </ScrollArea>
                        </TabsContent>

                        <TabsContent value="management">
                        <ScrollArea className="h-[200px] grid gap-4">
                        <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Entrepreneurship 101</div>
                          <div className="text-sm text-muted-foreground">
                            Module 1 · Business
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cali
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Financial Management</div>
                          <div className="text-sm text-muted-foreground">
                            Module 11 · Finance
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Kishkan
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Project Management</div>
                          <div className="text-sm text-muted-foreground">
                            Module 14 · Management
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          The King
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Business Strategy</div>
                          <div className="text-sm text-muted-foreground">
                            Module 15 · Strategy
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cutter
                        </div>
                      </a>
                        </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="writing">
                        <ScrollArea className="h-[200px] grid gap-4">
                        <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Marketing Copy</div>
                          <div className="text-sm text-muted-foreground">
                            Module 1 · Marketing
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cali
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Financial Reports</div>
                          <div className="text-sm text-muted-foreground">
                            Module 11 · Finance Reports
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Kishkan
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Project Reports</div>
                          <div className="text-sm text-muted-foreground">
                            Module 14 · Reports
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          The King
                        </div>
                      </a>
                      <a
                        href="/"
                        className="grid grid-cols-[auto,1fr,auto] items-center gap-4 hover:bg-primary-foreground rounded-lg hover:p-3 transition-all"
                      >
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <ClipboardList  className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Writing Strategy</div>
                          <div className="text-sm text-muted-foreground">
                            Module 15 · Strategy
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-accent-foreground">
                          Cutter
                        </div>
                      </a>
                        </ScrollArea>
                        </TabsContent>
                        
                        
                        </div>


                        </Tabs>
                    </CardContent>
                  </CardHeader>
                </Card>
                <Card className="md:row-start-3 md:col-start-2 col-span-2">
                    <CardHeader className="pb-2">
                      <CardDescription>All Courses</CardDescription>
                      <CardTitle className="text-4xl">45%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        859 More To Go
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={45} aria-label="25% increase" />
                    </CardFooter>
                </Card>
                <Card className="md:row-start-3 md:col-start-4 col-span-2 md:col-span-3">
                <CardHeader className="pb-2">
                      <CardDescription>Motivational Quote of The Day</CardDescription>
                      <CardTitle className="text-4xl">All human wisdom is summed up in two words; wait and hope.</CardTitle>
                    </CardHeader>
                </Card>

              </div>
            </div>
          </main>
        </TooltipProvider>
      </>
    );
  }
  redirect("/login");
}
