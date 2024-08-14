// src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { notFound } from 'next/navigation';
import { isAdmin } from '@/access/access';
import { User } from '@/payload-types';
 // Assuming User type is defined


export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Extract and parse the user data from cookies
  const userCookie = req.cookies.get('user');
  let user: User | null = null;

  if (userCookie) {
    try {
      user = JSON.parse(userCookie.toString());
    } catch (error) {
      console.error('Failed to parse user cookie', error);
    }
  }

  // Check if the path requires admin access
  
  if (pathname.startsWith('/admin')) {
    // Use the isAdmin function to check if the user is an admin
    if (!isAdmin) {
      // Use `notFound` to throw a 404 error if user is not an admin
      return notFound();
    }
  }

  // Allow requests if they pass the checks
  return NextResponse.next();
}

// Apply middleware to specific paths
export const config = {
  matcher: ['/admin/:path*', '/admin/login'],
};
