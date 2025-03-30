# Shared Shadcn AI Components Example

This is an example of how to use the shared-shadcn-ai components in a Next.js application.

## Setup

1. Create a new Next.js application:
```bash
npx create-next-app my-app
cd my-app
```

2. Install the shared-shadcn-ai package:
```bash
npm install shared-shadcn-ai
```

3. Set up Tailwind CSS (if not already set up):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Configure your tailwind.config.js:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/shared-shadcn-ai/dist/**/*.{js,ts,jsx,tsx}', // Add this line
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar, var(--background)))",
          foreground: "hsl(var(--sidebar-foreground, var(--foreground)))",
          border: "hsl(var(--sidebar-border, var(--border)))",
          accent: "hsl(var(--sidebar-accent, var(--muted)))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground, var(--muted-foreground)))",
          ring: "hsl(var(--sidebar-ring, var(--ring)))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

5. Add the CSS variables to your globals.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;

    --sidebar: var(--background);
    --sidebar-foreground: var(--foreground);
    --sidebar-border: var(--border);
    --sidebar-accent: var(--muted);
    --sidebar-accent-foreground: var(--muted-foreground);
    --sidebar-ring: var(--ring);
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;

    --sidebar: var(--background);
    --sidebar-foreground: var(--foreground);
    --sidebar-border: var(--border);
    --sidebar-accent: var(--muted);
    --sidebar-accent-foreground: var(--muted-foreground);
    --sidebar-ring: var(--ring);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

6. Set up the ThemeProvider in your layout:
```tsx
// app/providers.tsx
"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

// app/layout.tsx
import { Providers } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

7. Use the components in your pages:
```tsx
// app/page.tsx
"use client"

import { NavbarWrapper, SidebarLeft, LoginForm } from 'shared-shadcn-ai';
import { Search, Sparkles, Shell, Settings2, MessageCircleQuestion } from 'lucide-react';

export default function Home() {
  // Sample data for the sidebar
  const sidebarData = {
    navMainItems: [
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
      }
    ],
    navSecondaryItems: [
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
      },
      {
        title: "Help",
        url: "#",
        icon: MessageCircleQuestion,
      }
    ],
    historyItems: [
      {
        name: "Modern Oceanfront Villa",
        url: "#",
        date: "Today",
      },
      {
        name: "Luxury Downtown Condo",
        url: "#",
        date: "Yesterday",
      }
    ]
  };

  // Login handlers
  const handleEmailLogin = async (email: string, password: string) => {
    console.log('Login with:', email, password);
    // Implement your login logic here
  };

  const handleGoogleLogin = async () => {
    console.log('Google login');
    // Implement your Google login logic here
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <NavbarWrapper 
        logoLight="/logo-light.svg"
        logoDark="/logo-dark.svg"
        navItems={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact" }
        ]}
      />
      
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <SidebarLeft 
          logoLight="/logo-light.svg"
          logoDark="/logo-dark.svg"
          navMainItems={sidebarData.navMainItems}
          navSecondaryItems={sidebarData.navSecondaryItems}
          historyItems={sidebarData.historyItems}
        />
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Welcome to the Example App</h1>
          
          {/* Login Form */}
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Login Example</h2>
            <LoginForm 
              onEmailLogin={handleEmailLogin}
              onGoogleLogin={handleGoogleLogin}
              backgroundImage="/background.jpg"
              title="Welcome to Our App"
              subtitle="Sign in to continue"
            />
          </div>
        </main>
      </div>
    </div>
  );
}