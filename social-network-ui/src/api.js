import axios from "axios";
const url = "/user";

export default class API {
    //get all user from backend
    static async getAllUser() {
        const res = await axios.get(url);
        return res.data;
    }
    //get user by id from backend
    static async getUserById(id) {
        const res = await axios.get(`${url}/search/${id}`);
        return res.data;
    }
    //create user
    static async createUser(user) {
        const res = await axios.post(`${url}/signup`, user);
        return res.data;
    }
    //update user by id
    static async updateUserById(id, user) {
        const res = await axios.patch(`${url}/profile/${id}`, user);
        return res.data;
    }
    //delete user
    static async deleteUser(id) {
        const res = await axios.delete(`${url}/profile/${id}`);
        return res.data;
    }
}