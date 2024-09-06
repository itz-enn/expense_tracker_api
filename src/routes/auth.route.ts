import { Router } from "express";
import { registerUser } from "../controllers/auth/RegisterUser";
import { loginUser } from "../controllers/auth/LoginUser";

const authRoutes: Router = Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);

export { authRoutes };
