import { Router } from "express";
import { specialtyRoutes } from "../modules/specialty/specialty.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { UserRoutes } from "../modules/user/user.routes";

const router = Router()

router.use("/specialties", specialtyRoutes)
router.use("/auth", AuthRoutes)
router.use("/doctors", UserRoutes)

export const IndexRoutes = router;