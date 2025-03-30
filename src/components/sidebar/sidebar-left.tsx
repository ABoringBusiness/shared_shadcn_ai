"use client";

import * as React from "react";
import Image from "next/image";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "../ui/sidebar";
import { NavHistory } from "./nav-history";
import { NavListings } from "./nav-listings";

interface SidebarLeftProps extends React.ComponentProps<typeof Sidebar> {
  logoLight?: string;
  logoDark?: string;
  navMainItems?: any[];
  navSecondaryItems?: any[];
  historyItems?: any[];
  listingItems?: any[];
  maxMainItems?: number;
  maxSecondaryItems?: number;
  maxHistoryItems?: number;
  maxListingCategories?: number;
  maxPropertiesPerCategory?: number;
}

export function SidebarLeft({
  logoLight = "/logo.svg",
  logoDark = "/logo-dark.svg",
  navMainItems,
  navSecondaryItems,
  historyItems,
  listingItems,
  maxMainItems = 6,
  maxSecondaryItems = 4,
  maxHistoryItems = 4,
  maxListingCategories = 3,
  maxPropertiesPerCategory = 2,
  ...props
}: SidebarLeftProps) {
  return (
    <Sidebar className="border-r-0 w-64" {...props}>
      <SidebarHeader className="h-auto py-2">
        <div className="m-2">
          <Image
            src={logoLight}
            alt="Logo"
            width={120}
            height={40}
            className="dark:hidden"
          />
          <Image
            src={logoDark}
            alt="Logo"
            width={120}
            height={40}
            className="hidden dark:block"
          />
        </div>
        {navMainItems && <NavMain items={navMainItems} maxItems={maxMainItems} />}
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto">
        {historyItems && <NavHistory history={historyItems} maxItems={maxHistoryItems} />}
        {listingItems && (
          <NavListings
            listings={listingItems}
            maxCategories={maxListingCategories}
            maxPropertiesPerCategory={maxPropertiesPerCategory}
          />
        )}
        {navSecondaryItems && (
          <NavSecondary
            items={navSecondaryItems}
            maxItems={maxSecondaryItems}
            className="mt-auto"
          />
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}