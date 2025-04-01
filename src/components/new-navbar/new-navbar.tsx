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
  Glasses,
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
  // Icon button links
  iconLinks?: {
    camera?: string
    room?: string
    phone?: string
    pen?: string
    search?: string
  }
  // Whether to open links in a new tab
  openLinksInNewTab?: boolean
}

export function NewNavbar({
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
  iconLinks = {},
  openLinksInNewTab = false,
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
        "fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg shadow-sm navbar-glass",
        className,
      )}
    >
      <div className="flex p-4 justify-between w-full h-16 items-center">
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

        <div className="flex items-center justify-end gap-2">
          {/* Icon buttons */}
          <div className="hidden md:flex items-center gap-2 mr-2">
            {/* Camera button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(iconLinks.camera || 'https://photo.reva.now/create?flow=sid', openLinksInNewTab ? '_blank' : '_self')}
              className="relative group"
            >
              <Camera className="h-5 w-5" />
              <span className="sr-only">Camera</span>
              <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                Headshots
              </span>
            </Button>
            {/* Room/Sofa button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(iconLinks.room || 'https://photo.reva.now/home-ai', openLinksInNewTab ? '_blank' : '_self')}
              className="relative group"
            >
              <Sofa className="h-5 w-5" />
              <span className="sr-only">Room</span>
              <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                Virtual Staging
              </span>
            </Button>

            {/* Phone button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(iconLinks.phone || "https://call.reva.now", openLinksInNewTab ? '_blank' : '_self')}
              className="relative group"
            >
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
              <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                Lead Calling
              </span>
            </Button>

            {/* Pen button */}
            {iconLinks.pen ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(iconLinks.pen, openLinksInNewTab ? '_blank' : '_self')}
                className="relative group"
              >
                <PenLine className="h-5 w-5" />
                <span className="sr-only">Pen</span>
                <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                  Prompt Library
                </span>
              </Button>
            ) : (
              <Button variant="ghost" size="icon" className="relative group">
                <PenLine className="h-5 w-5" />
                <span className="sr-only">Pen</span>
                <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                  Prompt Library
                </span>
              </Button>
            )}
          </div>
          {showSearch && (
            <div className="relative hidden md:flex">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(iconLinks.search || "https://stage.reva.now", openLinksInNewTab ? '_blank' : '_self')}
                className="relative group"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
                <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                  Search
                </span>
              </Button>
              {/* {isSearchOpen ? (
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
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="relative group">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                      Search
                    </span>
                  </Button>
                )
              } */}
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
                <DropdownMenuItem onClick={() => onThemeToggle?.("glass")}>
                  <Glasses className="mr-2 h-4 w-4" />
                  Glass
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onThemeToggle?.("system")}>
                  <Settings className="mr-2 h-4 w-4" />
                  System
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
              <span className="text-sm font-medium text-green-600">+{balance.toLocaleString()}</span>
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
          {/* Logout button */}
          <Button variant="ghost" size="icon" className="ml-2" onClick={onLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
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
      <Link
        href={item.disabled ? "#" : item.href || "#"}
        className={cn(
          navigationMenuTriggerStyle(),
          "text-sm font-medium",
          item.disabled && "cursor-not-allowed opacity-60",
          pathname === item.href && "text-foreground font-semibold"
        )}
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  )
}

function MobileNavItem({ item, pathname }: { item: NavItem; pathname: string | null }) {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.children) {
    return (
      <div className="px-7">
        <button
          className="flex w-full items-center justify-between py-2 text-sm font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.title}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")}
          />
        </button>
        {isOpen && (
          <div className="mt-2 space-y-2 pl-4">
            {item.children.map((child) => (
              <Link
                key={child.title}
                href={child.disabled ? "#" : child.href || "#"}
                className={cn(
                  "block py-2 text-sm",
                  child.disabled && "cursor-not-allowed opacity-60",
                  pathname === child.href && "font-semibold"
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
      href={item.disabled ? "#" : item.href || "#"}
      className={cn(
        "block px-7 py-2 text-sm font-medium",
        item.disabled && "cursor-not-allowed opacity-60",
        pathname === item.href && "font-semibold"
      )}
    >
      {item.title}
    </Link>
  )
}

const defaultNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    children: [
      {
        title: "Feature 1",
        href: "/features/feature-1",
        description: "This is feature 1",
      },
      {
        title: "Feature 2",
        href: "/features/feature-2",
        description: "This is feature 2",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About",
    href: "/about",
  },
]

