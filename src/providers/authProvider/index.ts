import type { AuthProvider } from "@refinedev/core";
import axios from "axios";

export const TOKEN_KEY = "ums-token";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    if (email && password) {
        const {data} = await axios.post('http://localhost:5169/login', {
          username: email,
          password,
        }, {
          headers: {
            "Content-Type": "application/json",
          }
      })

      localStorage.setItem(TOKEN_KEY, data);
      return {
        success: true,
        redirectTo: "/home",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        token
      };
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
