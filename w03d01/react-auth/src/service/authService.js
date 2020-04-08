import http from "./httpService";
import api from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = 'jwt';

http.setJwt(getJwt());

function saveData(key, value) {
    localStorage.setItem(key, value);
}

export function login(data) {
    http.post(api.login, data)
    .then((response) => {
        const { message, token } = response.data;
        saveData("jwt", token);
        saveData("message", message);
        window.location = '/';
    });
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export function logout() {
    localStorage.clear();
    window.location = '/login';
}

export function secureRoute(history) {
    if (!localStorage.getItem('jwt')) {
        history.push('/login')
    }
}

export function getCurrentUser() {
    try {
      const jwt = localStorage.getItem(tokenKey);
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  }

export default {
    login,
    logout,
    getCurrentUser,
    secureRoute
};
