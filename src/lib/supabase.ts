import { createClient } from '@supabase/supabase-js';

/* Both values are safe to ship: what anyone can do with them is decided by
   the row-level security in supabase/schema.sql. */
export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const BLOG_BUCKET = 'blog-images';

/** For the public pages: read-only, never signs in. */
export const supabase = createClient(supabaseUrl, key, { auth: { persistSession: false, autoRefreshToken: false } });

/** For /admin: keeps the signed-in session in the browser. */
export const adminClient = () => createClient(supabaseUrl, key);
