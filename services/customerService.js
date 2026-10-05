import { api } from "./api";

export const bookingRequest = async ({ credentials }) => {
  try {
    const res = await api.post("/customer/booking", credentials);
    return res;
  } catch (err) {
    throw err;
  }
};
