
import axios from "../../Config/http-common";

const getAll = async () => {
    try {
        const result = await axios.get("/users");
        return result;
    } catch (error) {
        return error.message;
    }
}

const getId = async (id) => {
    try {
        const result = await axios.get(`/users/${id}`);
        return result;
    } catch (error) {
        return error.message;
    }
}

const create = async (data) => {
    try {
        const result = await axios.post("/users", data);
        return result;
    } catch (error) {
        return error.message;
    }
}

const update = async (data) => {
    const id = parseInt(data.userId);
    try {
        const result = await axios.put(`/users/${id}`, data);
        return result;
    } catch (error) {
        return error.message;
    }
}

const updatePhoto = async (data) => {
    const id = parseInt(data.usproId);
    console.info(data)
    try {
        const result = await axios.put(`/userprofiles/userPhotoProfiles/${id}`, data);
        return result;
    } catch (error) {
        return error.message;
    }

}

const remove = async (id) => {
    try {
        const result = await axios.delete(`/users/${id}`);
        return result;
    } catch (error) {
        return error.message;
    }

}

const login = async (data) => {
    console.info(data);
    try {
        const result = await axios.post("auth/login", data);
        return result;
    } catch (error) {
        return error.message;
    }
}

const ReduceService = {
    getAll,
    getId,
    create,
    update,
    remove,
    updatePhoto,
    login
}

export default ReduceService;