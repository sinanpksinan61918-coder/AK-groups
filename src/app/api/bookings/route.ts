import { NextResponse } from "next/server";
import { bookingsService } from "@/services/bookings";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await bookingsService.createBooking(body);
    return NextResponse.json({ success: true, booking: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Invalid booking request payload" },
      { status: 400 }
    );
  }
}
