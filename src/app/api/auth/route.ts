import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Authentication placeholder logic
    return NextResponse.json({
      success: true,
      user: { email: body.email, role: "guest" },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Invalid authentication credentials" },
      { status: 400 }
    );
  }
}
