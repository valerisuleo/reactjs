import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
    const { status } = error.response;
    const expectedError = status >= 400 && status < 500;

    if (!expectedError) {
        console.error("oops...UNEXPECTED ERROR");
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
