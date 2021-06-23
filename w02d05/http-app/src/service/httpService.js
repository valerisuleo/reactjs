import axios from "axios";
import { toast } from "react-toastify";
import * as Sentry from '@sentry/browser';
Sentry.init({ dsn: "https://53e7846aaa2149aba2ed28d9a6b64a2c@sentry.io/5182980" });

axios.interceptors.response.use(null, error => {
    const { status } = error.response;
    const expectedError = error.response && status >= 400 && status < 500;

    if (!expectedError) {
        Sentry.captureException(error)
        // console.error("oops...UNEXPECTED ERROR");
        toast.error("oops...UNEXPECTED ERROR")
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
