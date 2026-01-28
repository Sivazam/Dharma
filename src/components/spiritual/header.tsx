'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu, User, LogOut, Heart } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useToast } from '@/hooks/use-toast'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading, signInWithGoogle, logout } = useAuth()
  const { toast } = useToast()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Dharma Categories', href: '/#categories' },
    { name: 'Contact Us', href: '/#contact' },
  ]

  const handleSignIn = async () => {
    try {
      await signInWithGoogle()
      toast({
        title: 'Welcome!',
        description: 'You have successfully signed in to Dharma Hundi.',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Sign In Failed',
        description: error.message || 'An error occurred during sign in.',
      })
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      toast({
        title: 'Signed Out',
        description: 'You have been signed out successfully.',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Sign Out Failed',
        description: error.message || 'An error occurred during sign out.',
      })
    }
  }

  return (
    <header className="sticky top-0 z-[60] w-full border-b border-saffron/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/voice-62ddc.firebasestorage.app/o/dharmaLogo.png?alt=media&token=eca586ba-6b52-4328-8365-5db706212ab0"
            alt="Dharma Hundi Logo"
            className="w-[65px] h-[65px] object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-saffron via-gold to-sandalwood bg-clip-text text-transparent">
            Dharma Hundi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Button / User Menu */}
        <div className="hidden md:flex items-center gap-4">
          {loading ? (
            <div className="h-9 w-24 bg-muted animate-pulse rounded" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                    <AvatarFallback>
                      {user.displayName?.charAt(0).toUpperCase() || <User className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.displayName}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Favorite Organizations</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={handleSignIn}
              variant="outline"
              className="border-saffron/50 text-saffron hover:bg-saffron hover:text-saffron-foreground"
            >
              Sign In with Google
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-saffron/20 bg-background/95 backdrop-blur">
          <nav className="flex flex-col gap-4 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-saffron transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-saffron/20">
              {loading ? (
                <div className="h-12 w-full bg-muted animate-pulse rounded" />
              ) : user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                      <AvatarFallback>
                        {user.displayName?.charAt(0).toUpperCase() || <User className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{user.displayName}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-saffron/50 text-saffron hover:bg-saffron hover:text-saffron-foreground"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleSignIn}
                  variant="outline"
                  className="w-full border-saffron/50 text-saffron hover:bg-saffron hover:text-saffron-foreground"
                >
                  Sign In with Google
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
