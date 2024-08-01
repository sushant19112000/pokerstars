import { NextResponse } from 'next/server';


export function middleware(req, res, next) {
    const previousPath = req.headers.referer || '/';
  
    req.previousPath = previousPath;
   
  // Return NextResponse to proceed to the next middleware
  return NextResponse.next();
}
  
