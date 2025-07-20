import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASEURL = 'https://api-walletbits.82.29.170.171.nip.io/api/v1';

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  console.log("Request error: ", error);
  return Promise.reject(error)
});


axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {

    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.error("Response error :: ", error.response);

      // fetch new access token
      try {
        const refresh_token_url = "https://api-walletbits.82.29.170.171.nip.io/api/v1/auth/refresh-token"
        const response = await axios
          .post(refresh_token_url, {
            refresh: localStorage.getItem("refreshToken"),
          });

        const newAccesToken = response.data.access;

        localStorage.setItem("accessToken", newAccesToken);
        
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${newAccesToken}`;
        return await axios(originalRequest);

      } catch (refreshError) {
        
        const navigate = useNavigate();
        navigate("/sign-in");

        return await Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
