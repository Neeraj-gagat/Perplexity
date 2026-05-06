import { createClient } from '@/lib/supabase/client'

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
        <button className='bg-gray-600 text-white text-bold border-2 border-black rounded-4xl px-2' onClick={() =>  login("google")}>Login with google</button>
        <button className='bg-gray-600 text-white text-bold border-2 border-black rounded-4xl px-2' onClick={() => login("github")}>Login with github</button>
    </div>
}