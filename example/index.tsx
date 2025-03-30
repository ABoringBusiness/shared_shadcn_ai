import React from 'react';
import { NavbarWrapper, SidebarLeft, LoginForm } from '../src';
import { Search, Sparkles, Shell, Settings2, MessageCircleQuestion } from 'lucide-react';

// Example usage of the components
export default function ExampleApp() {
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