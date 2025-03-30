"use client"

import { useState } from "react"
import { Navbar } from "./navbar"

interface NavbarWrapperProps {
  logoLight?: string
  logoDark?: string
  navItems?: {
    href: string
    label: string
  }[]
  actionButtons?: React.ReactNode
  promptModalComponent?: React.ReactNode
  promptMenuComponent?: React.ReactNode
}

export function NavbarWrapper({
  logoLight,
  logoDark,
  navItems,
  actionButtons,
  promptModalComponent,
  promptMenuComponent
}: NavbarWrapperProps) {
  const [isPromptModalOpen, setPromptModalOpen] = useState(false)
  
  return (
    <>
      <Navbar 
        onWriteClick={() => setPromptModalOpen(true)} 
        logoLight={logoLight}
        logoDark={logoDark}
        navItems={navItems}
        actionButtons={actionButtons}
        promptMenuComponent={promptMenuComponent}
      />
      {promptModalComponent && (
        <div className={isPromptModalOpen ? "block" : "hidden"}>
          {promptModalComponent}
        </div>
      )}
    </>
  )
}