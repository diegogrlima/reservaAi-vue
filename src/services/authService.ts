import { api } from "./api";

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  user: UserResponse;
}

const TOKEN_KEY = "reservaai:token";
const TOKEN_TYPE_KEY = "reservaai:tokenType";
const USER_KEY = "reservaai:user";

export async function createUser(request: CreateUserRequest): Promise<UserResponse> {
  const { data } = await api.post<UserResponse>("/users", request);
  return data;
}

export async function login(request: LoginRequest): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", request);
  saveAuth(data);
  return data;
}

export function saveAuth(auth: AuthResponse): void {
  localStorage.setItem(TOKEN_KEY, auth.token);
  localStorage.setItem(TOKEN_TYPE_KEY, auth.type);
  localStorage.setItem(USER_KEY, JSON.stringify(auth.user));
  api.defaults.headers.common.Authorization = `${auth.type} ${auth.token}`;
}

export function getStoredUser(): UserResponse | null {
  const storedUser = localStorage.getItem(USER_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser) as UserResponse;
  } catch {
    return null;
  }
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_TYPE_KEY);
  localStorage.removeItem(USER_KEY);
  delete api.defaults.headers.common.Authorization;
}
