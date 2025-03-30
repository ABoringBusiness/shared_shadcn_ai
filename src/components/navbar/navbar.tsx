"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { PenLine, Phone, Menu, Sofa, Camera, ChevronDown, LogIn, LogOut } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"
import Image from "next/image"

interface NavbarProps {
  onSelectPrompt?: (prompt: string) => void
  onWriteClick?: () => void
  logoLight?: string
  logoDark?: string
  navItems?: {
    href: string
    label: string
  }[]
  actionButtons?: React.ReactNode
  promptMenuComponent?: React.ReactNode
}

export function Navbar({ 
  onSelectPrompt, 
  onWriteClick,
  logoLight = "/REVA - dark.svg",
  logoDark = "/reVA.svg",
  navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ],
  actionButtons,
  promptMenuComponent
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPromptMenuOpen, setIsPromptMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { theme } = useTheme();
  const promptMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (promptMenuRef.current && !promptMenuRef.current.contains(event.target as Node)) {
        setIsPromptMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handlePromptSelect = (prompt: string) => {
    if (onSelectPrompt) {
      onSelectPrompt(prompt)
      setIsPromptMenuOpen(false)
    }
  }

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="px-4 pr-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {
              theme === "light" ?
                <Image src={logoLight} alt="Logo" width={100} height={50} /> :
                <Image src={logoDark} alt="Logo" width={100} height={50} />
            }
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} isActive={pathname === item.href}>
                {item.label}
              </NavItem>
            ))}
            {promptMenuComponent && (
              <div ref={promptMenuRef} className="relative">
                <button
                  className={cn(
                    "relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                    isPromptMenuOpen ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent",
                  )}
                  onClick={() => setIsPromptMenuOpen(!isPromptMenuOpen)}
                  onMouseEnter={() => setIsPromptMenuOpen(true)}
                >
                  GPT Prompts
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isPromptMenuOpen && promptMenuComponent}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {actionButtons || (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onWriteClick}
                  className="hidden md:flex relative group"
                  data-write-button="true"
                >
                  <PenLine className="h-5 w-5" />
                  <span className="sr-only">Write</span>
                  <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    Prompt Library
                  </span>
                </Button>

                <Button variant="outline" size="icon" className="relative group">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Lead Calling</span>
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-destructive rounded-full flex items-center justify-center text-[10px] text-destructive-foreground">
                    3
                  </span>
                  <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    Lead Calling
                  </span>
                </Button>

                <Button variant="outline" size="icon" className="relative group">
                  <Sofa className="h-5 w-5" />
                  <span className="sr-only">Virtual Staging</span>
                  <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    Virtual Staging
                  </span>
                </Button>

                <Button variant="outline" size="icon" className="relative group">
                  <Camera className="h-5 w-5" />
                  <span className="sr-only">Headshots</span>
                  <span className="absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    Headshots
                  </span>
                </Button>
              </>
            )}
            <div className="flex pl-8">
              <ThemeToggle
                className="w-full justify-start"
                collapsed={true}
              />

              {/* Sign In/Log Out Button */}
              <Button
                variant={"default"}
                size="sm"
                className="ml-2 hidden sm:flex items-center gap-1.5"
                onClick={handleAuthClick}
              >
                <>
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Navigate to different sections of the site.</SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={onWriteClick}
                      data-write-button="true"
                    >
                      <PenLine className="h-4 w-4" />
                      Prompt Library
                    </Button>
                    <nav className="flex flex-col space-y-1">
                      {navItems.map((item) => (
                        <MobileNavItem key={item.href} href={item.href} isActive={pathname === item.href}>
                          {item.label}
                        </MobileNavItem>
                      ))}
                      {promptMenuComponent && (
                        <MobileNavItem href="/gpt-prompts" isActive={pathname === "/gpt-prompts"}>
                          GPT Prompts
                        </MobileNavItem>
                      )}
                    </nav>
                    <div className="pt-4 border-t">
                      <Button
                        variant={"default"}
                        className="w-full flex items-center justify-center gap-1.5"
                        onClick={handleAuthClick}
                      >
                        <ThemeToggle
                          className="w-full justify-start"
                          collapsed={true}
                        />
                        <>
                          <LogOut className="h-4 w-4" />
                          <span>Log Out</span>
                        </>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

interface NavItemProps {
  href: string
  isActive?: boolean
  children: React.ReactNode
}

function NavItem({ href, isActive, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent",
      )}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          layoutId="navbar-indicator"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  )
}

function MobileNavItem({ href, isActive, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {children}
    </Link>
  )
}