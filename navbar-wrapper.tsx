"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { PromptModal } from "@/components/prompt-modal"

export function NavbarWrapper() {
  const [isPromptModalOpen, setPromptModalOpen] = useState(false)
  
  return (
    <>
      <Navbar onWriteClick={() => setPromptModalOpen(true)} />
      <PromptModal open={isPromptModalOpen} onOpenChange={setPromptModalOpen} />
    </>
  )
}