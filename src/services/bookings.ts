import { db } from "@/lib/db";

export type BookingRequest = {
  propertyId: string;
  guestName: string;
  guestEmail: string;
  startDate: string;
  endDate: string;
};

export const bookingsService = {
  async createBooking(request: BookingRequest) {
    return db.bookings.create({ data: request as unknown as Record<string, unknown> });
  },
};
