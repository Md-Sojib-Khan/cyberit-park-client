import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export default async function middleware(request) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    })

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/add-course/:path*',
        '/manage-course/:path*',
    ]
}