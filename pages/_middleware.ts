import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (/(students|teachers|admins)(.+)?/.test(req.url)) {
    return new Response("unauth")
  }
}