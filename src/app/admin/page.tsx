import RequestCard from "@/components/admin/RequestCard";
import { supabase } from "@/lib/supabase/client"

export default async function AdminPage() {
    const { data, error } = await supabase.from("requests").select("*");

    if (!data) {
        return <h1>please wait</h1>
    }

    return (
        <div className="w-screen p-10 grid md:grid-cols-4 gap-5">
            {data.map(request => (
                <RequestCard db_request={request} key={request.id} />
            ))}
        </div>
    )
}

