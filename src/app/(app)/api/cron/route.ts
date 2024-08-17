import { NextResponse } from 'next/server';

export const revalidate = 0

export async function GET() {

    await fetch(`https://${process.env.VERCEL_URL}/admin`);
  return NextResponse.json({ ok: true });
}