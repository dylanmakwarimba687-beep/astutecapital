"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/lib/store"
import { apiClient } from "@/lib/api-client"

interface AuthGuardProps {
  children: React.ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isDemoMode, setUser, setAuthenticated } = useAppStore()
  const router = useRouter()

  useEffect(() => {
    // If in demo mode, allow access
    if (isDemoMode) {
      return
    }

    const checkAuth = async () => {
      const token = localStorage.getItem("token")
      const userData = localStorage.getItem("user")

      if (token && userData) {
        try {
          apiClient.setToken(token)
          const user = JSON.parse(userData)
          setUser(user)
          setAuthenticated(true)
        } catch (error) {
          console.error("Auth check failed:", error)
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          router.push("/auth/login")
        }
      } else {
        router.push("/auth/login")
      }
    }

    if (!isAuthenticated) {
      checkAuth()
    }
  }, [isAuthenticated, isDemoMode, setUser, setAuthenticated, router])

  if (!isAuthenticated && !isDemoMode) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return <>{children}</>
}
