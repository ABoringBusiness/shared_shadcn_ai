"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

export function RevaLogo() {
  const { resolvedTheme } = useTheme()
  const isDarkTheme = resolvedTheme === "dark"

  return (
    <Link href="/" className="flex items-center">
      {isDarkTheme ? (
        <Image src="/images/reva-logo-dark.svg" alt="REVA" width={100} height={30} className="h-8 w-auto" priority />
      ) : (
        <Image src="/images/reva-logo.png" alt="REVA" width={100} height={30} className="h-8 w-auto" priority />
      )}
    </Link>
  )
}

