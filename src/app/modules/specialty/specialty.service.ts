import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

// get all specialty 
const getAllSpecialty = async () : Promise<Specialty[]> =>{
    const result = await prisma.specialty.findMany()
    return result;
}

// create Specialty 
const createSpecialty = async (Payload: Specialty): Promise<Specialty> => {
    const specialty = await prisma.specialty.create({
        data: Payload
    })
    return specialty;

}

// Delete specialty 
const deleteSpecialty = async(id: string) : Promise<Specialty> =>{

    // Check if Specialty exists 
    const existingSpecialty = await prisma.specialty.findUnique({
        where : {id}
    })

    // Throw error if not found 
    if(!existingSpecialty) {
        throw new Error ("Specialty Not Found")
    }

    // Delete Specialty 
    const specialty = await prisma.specialty.delete({
        where: {id}
    })
    return specialty

}



export const specialtyService = {
    createSpecialty,
    getAllSpecialty,
    deleteSpecialty
}