import { api } from "./api";
import type { Room } from "@/data/rooms";

interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

export async function getAllRooms(): Promise<Room[]> {
  const { data } = await api.get<PageResponse<Room>>("/rooms");
  return data.content;
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
