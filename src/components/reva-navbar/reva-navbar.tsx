"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  Camera,
  ChevronDown,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  PenLine,
  Phone,
  Search,
  Settings,
  Sofa,
  Sun,
  User,
  Wallet,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { RevaLogo } from "./reva-logo-dark"

interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: React.ReactNode
  label?: string
  description?: string
  children?: NavItem[]
}

interface NavbarProps {
  logo?: React.ReactNode
  items?: NavItem[]
  showSearch?: boolean
  showThemeToggle?: boolean
  showLanguageSelector?: boolean
  showUserMenu?: boolean
  showBalance?: boolean
  showCreateButton?: boolean
  showNotifications?: boolean
  showMessages?: boolean
  balance?: number
  user?: {
    name?: string
    email?: string
    image?: string
    initials?: string
  }
  languages?: {
    current: string
    options: { label: string; value: string }[]
  }
  onThemeToggle?: (theme?: string) => void
  onLanguageChange?: (language: string) => void
  onLogout?: () => void
  onSearch?: (query: string) => void
  className?: string
  isDark?: boolean
}

export function RevaNavbar({
  logo,
  items = defaultNavItems,
  showSearch = false,
  showThemeToggle = true,
  showLanguageSelector = false,
  showUserMenu = true,
  showBalance = false,
  showCreateButton = false,
  showNotifications = false,
  showMessages = false,
  balance = 0,
  user,
  languages = {
    current: "Eng",
    options: [
      { label: "English", value: "en" },
      { label: "Français", value: "fr" },
      { label: "Español", value: "es" },
    ],
  },
  onThemeToggle,
  onLanguageChange,
  onLogout,
  onSearch,
  className,
  isDark = false,
}: NavbarProps) {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchQuery)
    }
    setIsSearchOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
    >
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">{logo || <RevaLogo />}</div>
            <div className="mt-8 flex flex-col gap-4">
              {items.map((item, index) => (
                <MobileNavItem key={index} item={item} pathname={pathname} />
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="mr-4 hidden md:flex">{logo || <RevaLogo />}</div>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item, index) => (
                <NavbarItem key={index} item={item} pathname={pathname} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Icon buttons */}
          <div className="hidden md:flex items-center gap-2 mr-2">
            <Button variant="ghost" size="icon">
              <Camera className="h-5 w-5" />
              <span className="sr-only">Camera</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Sofa className="h-5 w-5" />
              <span className="sr-only">Room</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Button>
            <Button variant="ghost" size="icon">
              <PenLine className="h-5 w-5" />
              <span className="sr-only">Pen</span>
            </Button>
          </div>
          {showSearch && (
            <div className="relative hidden md:flex">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="h-9 w-[200px] lg:w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close search</span>
                  </Button>
                </form>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
            </div>
          )}

          {showLanguageSelector && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-sm font-medium">
                  {languages.current}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.options.map((language) => (
                  <DropdownMenuItem key={language.value} onClick={() => onLanguageChange?.(language.value)}>
                    {language.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {showThemeToggle && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onThemeToggle?.("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onThemeToggle?.("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onThemeToggle?.("system")}>
                  <Settings className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onThemeToggle?.("contrast")}>
                  <Bell className="mr-2 h-4 w-4" />
                  High Contrast
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {showNotifications && (
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}

          {showMessages && (
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                3
              </Badge>
              <span className="sr-only">Messages</span>
            </Button>
          )}

          {showBalance && (
            <div className="hidden items-center gap-2 md:flex">
              <Wallet className="h-4 w-4" />
              <span className={cn("text-sm font-medium", balance < 0 ? "text-destructive" : "")}>
                {balance > 0 ? "+" : ""}
                {balance.toLocaleString()}
              </span>
            </div>
          )}

          {showCreateButton && <Button className="bg-black hover:bg-black/90 text-white">Create</Button>}

          {showUserMenu && user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.image} alt={user.name || "User"} />
                    <AvatarFallback>{user.initials || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {user.name && <p>{user.name}</p>}
                  {user.email && <p className="text-xs text-muted-foreground">{user.email}</p>}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  )
}

function NavbarItem({ item, pathname }: { item: NavItem; pathname: string | null }) {
  if (item.children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.children.map((child) => (
              <li key={child.title} className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href={child.href || "#"}
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    {child.icon}
                    <div className="mb-2 mt-4 text-lg font-medium">{child.title}</div>
                    <p className="text-sm leading-tight text-muted-foreground">{child.description}</p>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem>
      <Link href={item.href || "#"} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            pathname === item.href && "bg-accent text-accent-foreground",
            item.disabled && "cursor-not-allowed opacity-60",
          )}
        >
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

function MobileNavItem({ item, pathname }: { item: NavItem; pathname: string | null }) {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.children) {
    return (
      <div className="flex flex-col">
        <button
          className="flex items-center justify-between py-2 text-base font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.title}
          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 flex flex-col gap-2">
            {item.children.map((child) => (
              <Link
                key={child.title}
                href={child.href || "#"}
                className={cn(
                  "py-2 text-sm",
                  pathname === child.href && "font-medium text-primary",
                  child.disabled && "cursor-not-allowed opacity-60",
                )}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "py-2 text-base font-medium",
        pathname === item.href && "text-primary",
        item.disabled && "cursor-not-allowed opacity-60",
      )}
    >
      {item.title}
    </Link>
  )
}

// Replace the defaultNavItems array with this simplified version
const defaultNavItems: NavItem[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

