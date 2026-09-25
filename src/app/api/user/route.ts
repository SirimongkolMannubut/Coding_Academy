import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    await connectDB();
    const url = new URL(request.url);
    // In a real app with Auth, username comes from session
    const username = url.searchParams.get("username") || "guest";

    let user = await User.findOne({ username });
    if (!user) {
      user = await User.create({ username });
    }
    
    return NextResponse.json(user);
  } catch (error: any) {
    console.error("Database error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    // Default to "guest" for MVP if no auth
    const username = body.username || "guest";
    const { xp, level, badges, progress, completedLessons } = body;
    
    let user = await User.findOne({ username });
    if (user) {
      if (xp !== undefined) user.xp = xp;
      if (level !== undefined) user.level = level;
      if (badges !== undefined) user.badges = badges;
      if (progress !== undefined) user.progress = progress;
      if (completedLessons !== undefined) user.completedLessons = completedLessons;
      await user.save();
    } else {
      user = await User.create({ ...body, username });
    }
    
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
