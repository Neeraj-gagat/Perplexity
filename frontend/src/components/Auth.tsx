import { createClient } from '@/lib/supabase/client'
import { Button } from './ui/button';

// const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_PUBLISHABLE_KEY!)
const supabase = createClient();

export default function Auth() {

    async function login(provider: "github" | "google") {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider
        })

        if (error) {
            alert("Error while signing in" + error)
        } else {
            alert("Signed in")
        }
    }

    return <div className='flex justify-between flex-col gap-3.5'>
        <Button onClick={() =>  login("google")}>Login with google</Button>
        <Button onClick={() => login("github")}>Login with github</Button>
    </div>
}