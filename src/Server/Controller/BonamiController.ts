import BonamiService from "../Service/BonamiService";

export default class BonamiController {
  static async localLogin(email: string, password: string) {
    if (!(email && password)) {
      console.log("Empty email or password");
      return null;
    }
    return await BonamiService.localLogin(email, password);
  }

  static async getUser() {
    try {
      return await BonamiService.getUser();
    } catch (e) {
      throw e;
    }
  }

  static async logOut() {
    try {
      return await BonamiService.logOut();
    } catch (e) {
      throw e;
    }
  }
}
