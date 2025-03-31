import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as _radix_ui_react_separator from '@radix-ui/react-separator';
import { VariantProps } from 'class-variance-authority';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { LucideIcon } from 'lucide-react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { ClassValue } from 'clsx';

interface NavbarProps {
    onSelectPrompt?: (prompt: string) => void;
    onWriteClick?: () => void;
    logoLight?: string;
    logoDark?: string;
    navItems?: {
        href: string;
        label: string;
    }[];
    actionButtons?: React__default.ReactNode;
    promptMenuComponent?: React__default.ReactNode;
}
declare function Navbar({ onSelectPrompt, onWriteClick, logoLight, logoDark, navItems, actionButtons, promptMenuComponent }: NavbarProps): react_jsx_runtime.JSX.Element;

interface NavbarWrapperProps {
    logoLight?: string;
    logoDark?: string;
    navItems?: {
        href: string;
        label: string;
    }[];
    actionButtons?: React.ReactNode;
    promptModalComponent?: React.ReactNode;
    promptMenuComponent?: React.ReactNode;
}
declare function NavbarWrapper({ logoLight, logoDark, navItems, actionButtons, promptModalComponent, promptMenuComponent }: NavbarWrapperProps): react_jsx_runtime.JSX.Element;

interface ThemeToggleProps {
    className?: string;
    collapsed?: boolean;
}
declare function ThemeToggle({ className, collapsed }: ThemeToggleProps): react_jsx_runtime.JSX.Element | null;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type SidebarContext = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare const SidebarContext: React$1.Context<SidebarContext | null>;
declare function useSidebar(): SidebarContext;
declare const SidebarProvider: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const Sidebar: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarTrigger: React$1.ForwardRefExoticComponent<Omit<ButtonProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarRail: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarInset: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarInput: React$1.ForwardRefExoticComponent<Omit<Omit<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const SidebarHeader: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarFooter: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarSeparator: React$1.ForwardRefExoticComponent<Omit<Omit<_radix_ui_react_separator.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroup: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupLabel: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupAction: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarGroupContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenu: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuButton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuAction: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    showOnHover?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuBadge: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSkeleton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    showIcon?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSub: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuSubItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuSubButton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLAnchorElement> & React$1.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLAnchorElement>>;

interface SidebarLeftProps extends React$1.ComponentProps<typeof Sidebar> {
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
declare function SidebarLeft({ logoLight, logoDark, navMainItems, navSecondaryItems, historyItems, listingItems, maxMainItems, maxSecondaryItems, maxHistoryItems, maxListingCategories, maxPropertiesPerCategory, ...props }: SidebarLeftProps): react_jsx_runtime.JSX.Element;

declare function NavMain({ items, maxItems, }: {
    items: {
        title: string;
        url: string;
        icon: LucideIcon;
        isActive?: boolean;
    }[];
    maxItems?: number;
}): react_jsx_runtime.JSX.Element;

declare function NavSecondary({ items, maxItems, ...props }: {
    items: {
        title: string;
        url: string;
        icon: LucideIcon;
        badge?: React__default.ReactNode;
    }[];
    maxItems?: number;
} & React__default.ComponentPropsWithoutRef<typeof SidebarGroup>): react_jsx_runtime.JSX.Element;

declare function NavHistory({ history, maxItems, }: {
    history: {
        name: string;
        url: string;
        date?: string;
    }[];
    maxItems?: number;
}): react_jsx_runtime.JSX.Element;

declare function NavListings({ listings, maxCategories, maxPropertiesPerCategory, }: {
    listings: {
        name: string;
        icon?: React.ReactNode;
        properties: {
            name: string;
            url: string;
            icon?: React.ReactNode;
        }[];
    }[];
    maxCategories?: number;
    maxPropertiesPerCategory?: number;
}): react_jsx_runtime.JSX.Element;

interface LoginFormProps extends React.ComponentProps<"div"> {
    onEmailLogin?: (email: string, password: string) => Promise<void>;
    onGoogleLogin?: () => Promise<void>;
    onForgotPassword?: () => void;
    onSignUp?: () => void;
    redirectAfterLogin?: string;
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
}
declare function LoginForm({ className, onEmailLogin, onGoogleLogin, onForgotPassword, onSignUp, backgroundImage, title, subtitle, ...props }: LoginFormProps): react_jsx_runtime.JSX.Element;

declare const Card: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const Collapsible: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Input: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_separator.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Sheet: React$1.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React$1.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React$1.FC<SheetPrimitive.DialogPortalProps>;
declare const SheetOverlay: React$1.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "bottom" | "left" | "right" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React$1.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React$1.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function useIsMobile(): boolean;

declare function cn(...inputs: ClassValue[]): string;
declare function formatDateTime(date: Date | string | null): string;

export { Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Collapsible, CollapsibleContent, CollapsibleTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Input, Label, LoginForm, NavHistory, NavListings, NavMain, NavSecondary, Navbar, NavbarWrapper, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarLeft, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, ThemeToggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, buttonVariants, cn, formatDateTime, useIsMobile, useSidebar };
