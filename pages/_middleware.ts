import { NextRequest, NextResponse } from 'next/server'

const BLOCKED_COUNTRY = 'IT'

export function middleware(req: NextRequest) {
  const country = req.geo?.country
  
  if(req.nextUrl.pathname === '/not-legal') {
      if(country === BLOCKED_COUNTRY) {
        return NextResponse.next()
      }
      return NextResponse.redirect('/')
  }

  if (country === BLOCKED_COUNTRY) {
    return NextResponse.redirect('/not-legal')
  }
  return NextResponse.next()
}