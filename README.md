# Shared Shadcn AI Components

A collection of reusable UI components for Shadcn-based projects, including:

- Navbar components
- Sidebar components
- Login components

## Installation

```bash
npm install shared-shadcn-ai
# or
yarn add shared-shadcn-ai
# or
pnpm add shared-shadcn-ai
```

## Usage

### Navbar

```tsx
import { NavbarWrapper } from 'shared-shadcn-ai';

export default function Layout({ children }) {
  return (
    <>
      <NavbarWrapper 
        logoLight="/your-light-logo.svg"
        logoDark="/your-dark-logo.svg"
        navItems={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact" }
        ]}
      />
      <main>{children}</main>
    </>
  );
}
```

### Sidebar

```tsx
import { SidebarLeft } from 'shared-shadcn-ai';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SidebarLeft 
        logoLight="/your-light-logo.svg"
        logoDark="/your-dark-logo.svg"
        navMainItems={[
          {
            title: "Dashboard",
            url: "/dashboard",
            icon: HomeIcon,
            isActive: true,
          },
          // Add more items...
        ]}
        navSecondaryItems={[
          {
            title: "Settings",
            url: "/settings",
            icon: SettingsIcon,
          },
          // Add more items...
        ]}
      />
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

### Login Form

```tsx
import { LoginForm } from 'shared-shadcn-ai';

export default function LoginPage() {
  const handleEmailLogin = async (email, password) => {
    // Your login logic here
  };

  const handleGoogleLogin = async () => {
    // Your Google login logic here
  };

  return (
    <div className="container mx-auto py-10">
      <LoginForm 
        onEmailLogin={handleEmailLogin}
        onGoogleLogin={handleGoogleLogin}
        backgroundImage="/your-background-image.jpg"
        title="Welcome to Our App"
        subtitle="Sign in to continue"
      />
    </div>
  );
}
```

## Components

### Navbar Components
- `Navbar`: The main navbar component
- `NavbarWrapper`: A wrapper for the navbar with additional functionality
- `ThemeToggle`: A theme toggle component

### Sidebar Components
- `SidebarLeft`: The main sidebar component
- `NavMain`: Main navigation items
- `NavSecondary`: Secondary navigation items
- `NavHistory`: History navigation items
- `NavListings`: Listing navigation items

### Login Components
- `LoginForm`: A login form component with email and Google authentication

## License

MIT