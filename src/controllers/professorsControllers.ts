import { Request, Response } from "express";

import * as professorServices from "../services/professorServices"

export async function getProfessor(req:Request, res:Response) {
    try{
        const professors = professorServices.findAll();
        return res.send(professors)
    }
    catch(err){
        return res.sendStatus(500);
    }
}