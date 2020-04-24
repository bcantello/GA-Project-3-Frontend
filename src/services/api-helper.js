import axios from 'axios'

const api = axios.create({
    baseURL: "https://fetch-app-heroku.herokuapp.com/"
});

export const createUser = async (user) => {
    return await api.post('/users/', user);
};

export const verifyUser = async (user) => {
    return await api.get(`/users/${user.email}/${user.password}`, user);
};

export const getProviderByZip = async (zip) => {
    return await api.get(`/providers/location/${zip}`);
};

export const createAppointment = async (appointment) => {
    return await api.post('/appointments/', appointment);
};

export const getAppointmentById = async (appointment) => {
    return await api.get(`/appointments/${appointment}`);
};
