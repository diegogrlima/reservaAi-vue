import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/reservar",
    name: "reservar",
    component: () => import("@/views/RoomsView.vue"),
  },
  {
    path: "/reservar/:id/reserva",
    name: "room-booking",
    component: () => import("@/views/BookingView.vue"),
  },
  {
    path: "/reservar/:id",
    name: "room-detail",
    component: () => import("@/views/RoomDetailView.vue"),
  },
  {
    path: "/perfil",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
];

export default routes;
