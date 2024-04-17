export const BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_BASE_URL_LOCAL
    : import.meta.env.VITE_BASE_URL_DEPLOY;

export const BASE_URL_FRONT =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_BASE_URL_FRONT_LOCAL
    : import.meta.env.VITE_BASE_URL_FRONT_DEPLOY;
