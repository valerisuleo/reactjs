import axios from "axios";
import { toast } from "react-toastify";
import sentry from './loggerService';

sentry.init()

axios.interceptors.response.use(null, error => {
    const { status } = error.response;
    const expectedError = error.response && status >= 400 && status < 500;

    if (!expectedError) {
        sentry.log(error);
        toast.error("oops...UNEXPECTED ERROR");
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};