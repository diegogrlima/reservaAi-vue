import { api } from "./api";

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

export interface Room {
  id: number;
  roomNumber: string;
  roomType: string;
  dailyRate: number;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  capacity: number;
  amenities: string[];
}

export async function getAllRooms(page = 0, size = 6): Promise<PageResponse<Room>> {
  const { data } = await api.get<PageResponse<Room>>("/rooms", {
    params: { page, size },
  });
  return data;
}

export async function getRoomById(id: number): Promise<Room | undefined> {
  try {
    const { data } = await api.get<Room>(`/rooms/${id}`);
    return data;
  } catch {
    return undefined;
  }
}

export async function getAvailableRooms(): Promise<Room[]> {
  const { data } = await api.get<PageResponse<Room>>("/rooms/available");
  return data.content;
}
