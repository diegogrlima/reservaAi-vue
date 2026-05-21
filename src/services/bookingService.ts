import { api } from "./api";

export interface CreateBookingRequest {
  userId: number;
  roomId: number;
  checkIn: string;
  checkOut: string;
}

export interface BookingResponse {
  id: number;
  userId: number;
  userName: string;
  roomId: number;
  roomNumber: string;
  status: string;
}

export async function createBooking(request: CreateBookingRequest): Promise<BookingResponse> {
  const { data } = await api.post<BookingResponse>("/bookings", request);
  return data;
}
