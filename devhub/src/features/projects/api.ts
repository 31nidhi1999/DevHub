/**
 * 
 * INTEGRATION with REST API
 * 
 */

import api from "../../api/axios";
import type{ Project } from "./types";


export const deleteProject = async(id:string) : Promise<void>=>{
    await api.delete('projects/${id}');
}

export const projectList = async():Promise<Project[]>=>{
    const {data} = await api.get("projects");

    return data;
}

export const createProject = async(newProject : Omit<Project, "id"|"createdAt">) : Promise<Project> =>{
    const {data} = await api.post("/projects",newProject);
    return data;
}

export const updateProject = async(id:string, updateProject : Partial<Project>) : Promise<Project> =>{
    const {data} = await api.put("/projects/${id}",updateProject);
    return data;
}