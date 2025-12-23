import { NextRequest, NextResponse } from 'next/server';
import { validateCredentials, createSession, deleteSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    if (validateCredentials(username, password)) {
      await createSession();
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await deleteSession();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}