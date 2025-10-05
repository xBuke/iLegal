import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Temporarily disabled Clerk middleware for development
// TODO: Re-enable when Clerk keys are configured
export function middleware(request: NextRequest) {
  // For now, allow all requests
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
