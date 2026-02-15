import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

export const registerUsers = async (user) => {
    const res = await axios.post(`${apiURL}/users/createUsers`, user);
    return res.data;
};

export const loginUsers = async (credentials) => {
    const res = await axios.post(`${apiURL}/users/loginUsers`, credentials, {
        Headers: {"Context-Type": "application/json"},
    });
    return res.data;
}