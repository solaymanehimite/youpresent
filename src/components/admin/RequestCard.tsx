"use client";
import { supabase } from "@/lib/supabase/client";
import { ArrowRight, Check, CircleDashed, CirclePlay, Loader, Square } from "lucide-react";
import { useState } from "react";

export default function RequestCard({
    db_request
}: {

    db_request: any,
}) {
    const [request, setRequest] = useState(db_request);
    const [loadingCompleted, setLoadingCompleted] = useState(false);


    return (
        <div className="border border-neutral-200 bg-neutral-100 h-50 flex flex-col rounded-md p-3">
            <div className="flex gap-5 w-full items-center">
                <h2 className="text-3xl font-serif">{request.presentationTitle}</h2>
                <ArrowRight className="ml-auto" />
            </div>
            <p className="opacity-50">Due at <span className="text-red-500">{request.dueDate}</span></p>
            <div className="flex gap-5 mt-auto items-center">
                <p className="text-neutral-500">By <span className="text-black">{request.firstName} {request.lastName}</span></p>
                <div className="cursor-pointer ml-auto"
                    onClick={async () => {
                        setLoadingCompleted(true);
                        const { data, error } = await supabase.
                            from("requests")
                            .update({ completed: !request.completed })
                            .eq("id", request.id)
                            .select();
                        if (data || !error) {
                            setRequest(data[0])
                            setLoadingCompleted(false);
                        }
                    }}>
                    {!loadingCompleted ? (request.completed ? <Check className="p-1 size-10 hover:bg-green-300 hover:text-green-600 transition-all rounded-md bg-green-200 text-green-500" /> :
                        <Square className="p-1 size-10 rounded-md hover:bg-neutral-200 transition-all" />)
                        : <CircleDashed className="animate-spin p-1 size-10 rounded-md" />}
                </div>
            </div>
        </div>
    )
}

