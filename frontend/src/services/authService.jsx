import { apiService } from "./api";
class AuthService {
  async login(email, password) {
    return await apiService.post("/api/auth/login", { email, password });
  }
  async register(name, email, password) {
    return await apiService.post("/api/auth/register", { name, email, password });
  }
  async verifyToken() {
    return await apiService.get("/api/auth/verify");
  }
  async logout() {
    return await apiService.post("/api/auth/logout");
  }
}
export const authService = new AuthService();