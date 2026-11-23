import { Request, Response } from "express";
import { specialtyService } from "./specialty.service";
import catchAsync from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";


// get specialty  
const getAllSpecialty = catchAsync(
    async (req: Request, res: Response)=>{
        const result = await specialtyService.getAllSpecialty()
        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: "Specialty get successfully",
            data : result
        })
    }
)

// create specialty 
const createSpecialty = catchAsync(
    async(req: Request, res: Response) =>{
        const Payload = req.body;
        const result = await specialtyService.createSpecialty(Payload)
        sendResponse(res, {
            httpStatusCode: 201,
            success : true,
            message: "Specialty created successfully",
            data : result
        })
    }
)

// delete specialty 
const deleteSpecialty = catchAsync (
    async(req: Request, res: Response)=>{
        const { id } = req.params;
        const result = await specialtyService.deleteSpecialty(id as string)
        sendResponse (res, {
            httpStatusCode: 200,
            success: true,
            message: "Specialty deleted successfully",
            data: result
        } )
    }
)

export const specialtyController = {
    createSpecialty,
    getAllSpecialty,
    deleteSpecialty
}