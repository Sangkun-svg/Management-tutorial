import axios from "axios";

export const AxiosWithToken = async (header, method, url, data) => {
  const token = localStorage.getItem("access_token");
  const headers = {
    ...(header || {}),
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
    Authorization: token,
  };
  return await axios.request({
    method: method || "GET",
    url,
    headers,
    data: data || null,
  });
};
export const AxiosWithoutToken = async (header, method, url, data) => {
  const headers = {
    ...(header || {}),
    "Content-Type": "application/json",
  };
  return await axios.request({
    method: method || "GET",
    url,
    headers,
    data: data || null,
  });
};
