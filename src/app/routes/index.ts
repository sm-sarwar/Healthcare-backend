import { Router } from "express";
import { specialtyRoutes } from "../modules/specialty/specialty.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";

const router = Router()

router.use("/specialties", specialtyRoutes)
router.use("/auth", AuthRoutes)

export const IndexRoutes = router;