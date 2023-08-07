import api from "../api";

export default class BonamiService {
  static async localLogin(email: string, password: string) {
    return await api.post("/local", { email, password });
  }

  static async getUser() {
    return (await api.get("/user")).data;
  }

  static async logOut() {
    return (await api.get("/logout")).data;
  }
}
