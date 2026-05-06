import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

const supabase = createClient();

export default function Dashboard () {
    const [user, setUser] = useState< User | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        async function getinfo() {
            const { data, error } = await supabase.auth.getUser()
            if (data.user) {
                setUser(data.user)    
            }
        }
        getinfo()
    },[])

    return <div>
        {!user && <Button onClick={() => {
            navigate("/auth");
        }} > Sign in</Button>}
        {user?.email}
    </div>
}