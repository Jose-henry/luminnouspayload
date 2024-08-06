// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { subscribeToMailchimp } from '@/utils/subscribe';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const message = await subscribeToMailchimp(email);
    return NextResponse.json({ message }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Subscription failed' }, { status: 400 });
  }
}
