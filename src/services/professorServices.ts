import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

export async function findAll() {
    const professors = await getRepository(Professor).find();
    console.log(professors)
    return professors
}