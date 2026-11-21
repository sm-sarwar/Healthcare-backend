import { Request, Response } from "express";
import { specialtyService } from "./specialty.service";


// get specialty  
const getAllSpecialty = async(req: Request, res: Response)=>{
    try {
        const result = await specialtyService.getAllSpecialty()
        res.status(200).json({
            success: true,
            message: "Specialty get successfully",
            data: result
        })

    }catch(error) {
        res.status(500).json({
            success: false,
            message:"Failed to fetched specialty",
            error: error
        })
    }

}

// create specialty 
const createSpecialty = async (req: Request, res: Response) => {
    try {
        const Payload = req.body;
        const result = await specialtyService.createSpecialty(Payload)
        res.status(201).json({
            success: true,
            message: "Specialty created successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create specialty",
            error: error
        })
    }
}

// delete specialty 
const deleteSpecialty = async(req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const result = await specialtyService.deleteSpecialty(id as string)
        res.status(200).json({
            success: true,
            message: "Specialty deleted successfully",
            data: result
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Failed to delete specialty",
            error: error
        })
    }

}

export const specialtyController = {
    createSpecialty,
    getAllSpecialty,
    deleteSpecialty
}