import React, { useState } from "react"
import { createProject } from "./api";
import { useMutation,useQueryClient } from "@tanstack/react-query";

export default function ProjectForm(){
    const[title,setTitle] = useState("");
    const[discription,setDescription]=useState("");
    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationFn : createProject,
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey:["projects"]});
            setTitle("");
            setDescription("");
        }
    })
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(!title.trim()) return;
        console.log(title);
        console.log(discription);
        createMutation.mutate({title,discription});
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
                <input 
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={(event)=>setTitle(event.target.value)}
                    className="border rounded px-2 py-1"
                />
                <textarea
                    placeholder="Project Description"
                    value={discription}
                    onChange={(event)=>setDescription(event.target.value)}
                    className="border rounded px-2 py-1"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-cyan-300 rounded px-3 py-1"
                >{createMutation.isPending ?  "Adding...":"Add Project"}</button>
            </form>
        </>
    )
}