"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Image as ImageIcon,
  Inbox,
  Mail,
  MessageCircleQuestion,
  MonitorPlay,
  Search,
  Settings2,
  Shell,
  Sparkles,
  Trash2,
  Building,
  MapPin,
} from "lucide-react";
import Image from "next/image";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { CalendarIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { NavHistory } from "@/components/nav-history";
import { NavListings } from "@/components/nav-listings";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "AI Diallers",
      url: "#",
      icon: Sparkles,
      isActive: true,
    },
    {
      title: "Pipeline",
      url: "#",
      icon: Shell,
      badge: "10",
    },
    {
      title: "Photo AI",
      url: "#",
      icon: ImageIcon,
      badge: "10",
    },
    {
      title: "Virtual Staging",
      url: "#",
      icon: MonitorPlay,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Mail",
      url: "#",
      icon: Mail,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  history: [
    {
      name: "Modern Oceanfront Villa",
      url: "#",
      date: "Today",
    },
    {
      name: "Luxury Downtown Condo",
      url: "#",
      date: "Yesterday",
    },
    {
      name: "Suburban Family Home",
      url: "#",
      date: "Yesterday",
    },
    {
      name: "Mountain View Cabin",
      url: "#",
      date: "3 days ago",
    },
    {
      name: "Beachfront Property Search",
      url: "#",
      date: "1 week ago",
    },
    {
      name: "Investment Properties in Austin",
      url: "#",
      date: "2 weeks ago",
    },
    {
      name: "New York Apartments",
      url: "#",
      date: "3 weeks ago",
    },
    {
      name: "Commercial Real Estate Listings",
      url: "#",
      date: "1 month ago",
    },
    {
      name: "Vacation Rentals in Florida",
      url: "#",
      date: "1 month ago",
    },
    {
      name: "First-Time Homebuyer Guide",
      url: "#",
      date: "2 months ago",
    },
  ],
  listings: [
    {
      name: "Residential Properties",
      icon: <Home className="h-4 w-4 mr-2 text-muted-foreground" />,
      properties: [
        {
          name: "Single Family Homes",
          url: "#",
        },
        {
          name: "Condos & Townhouses",
          url: "#",
        },
        {
          name: "Luxury Estates",
          url: "#",
        },
      ],
    },
    {
      name: "Commercial Properties",
      icon: <Building className="h-4 w-4 mr-2 text-muted-foreground" />,
      properties: [
        {
          name: "Office Spaces",
          url: "#",
        },
        {
          name: "Retail Locations",
          url: "#",
        },
        {
          name: "Industrial Buildings",
          url: "#",
        },
      ],
    },
    {
      name: "Locations",
      icon: <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />,
      properties: [
        {
          name: "Coastal Properties",
          url: "#",
        },
        {
          name: "Urban Properties",
          url: "#",
        },
        {
          name: "Rural Properties",
          url: "#",
        },
      ],
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0 w-64 top-16" {...props}>
      <SidebarHeader className="h-auto py-2">
        <NavMain items={data.navMain} maxItems={6} />
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto">
        <NavHistory history={data.history} maxItems={4} />
        <NavListings
          listings={data.listings}
          maxCategories={3}
          maxPropertiesPerCategory={2}
        />
        {/* <NavSecondary
          items={data.navSecondary}
          maxItems={4}
          className="mt-auto"
        /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
