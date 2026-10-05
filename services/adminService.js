import { api } from "./api";

export const registerRequest = async ({ credentials }) => {
  try {
    const res = await api.post("/admin/register", credentials);

    return res;
  } catch (err) {
    throw err;
  }
};

export const otpVerificationRequest = async ({ credentials }) => {
  try {
    const res = await api.post("/admin/verify-otp", credentials);
    return res;
  } catch (err) {
    throw err;
  }
};

export const loginRequest = async ({ credentials }) => {
  try {
    const res = await api.post("/admin/login", credentials);
    return res;
  } catch (err) {
    throw err;
  }
};
