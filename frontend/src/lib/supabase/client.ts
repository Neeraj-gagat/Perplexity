import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // alert(process.env.BUN_PUBLIC_SUPABASE_URL!)
  return createBrowserClient(
    process.env.BUN_PUBLIC_SUPABASE_URL!,
    process.env.BUN_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}
