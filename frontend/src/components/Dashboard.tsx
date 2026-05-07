import axios from "axios"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { BACKEND_URL } from "@/config";

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

    useEffect(() => {

        async function getExistingConversation() {
            if (user) {
                const {data: { session }} = await supabase.auth.getSession();   
                const jwt = session?.access_token;
                const response = await axios.get(`${BACKEND_URL}/conversations`, {
                    headers:{
                        Authorization: jwt
                    }
                })

                console.log(response.data)
            }
        }

        getExistingConversation();

    }, [user])

    return <div>
        {!user && <Button onClick={() => {
            navigate("/auth");
        }} > Sign in</Button>}
        {user?.email}
        <Button onClick={() => {
            supabase.auth.signOut();
            setUser(null)
        }}>
            Logout
        </Button>
    </div>
}