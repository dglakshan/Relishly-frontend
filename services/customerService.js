import { api } from "./api";

export const bookingRequest = async ({ credentials }) => {
  try {
    const res = await api.post("/customer/booking", credentials);
    return res;
  } catch (err) {
    throw err;
  }
};

export const veryfyOtp = async ({ credentials }) => {
  try {
    const res = await api.post("/customer/confirm-booking", credentials);
    return res;
  } catch (err) {
    throw err;
  }
};

export const fetchAvailableTables = async () => {
  try {
    const res = await api.get("/");
    return res;
  } catch (err) {
    throw err;
  }
};
