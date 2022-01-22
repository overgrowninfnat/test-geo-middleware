import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const country = req.geo?.country || null
    return new Response(country)
}