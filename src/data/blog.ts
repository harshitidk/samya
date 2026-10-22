import { supabase } from '../lib/supabase';

/* Posts live in Supabase (table `posts`) and are added and deleted from /admin. */
export interface Post {
  id: string;
  slug: string;
  title: string;
  /** One line under the title, and the link-preview description. */
  description: string;
  /** Markdown. */
  content: string;
  cover_url: string;
  cover_alt: string;
  /** Service slug this post belongs with, for the closing links. */
  service: string | null;
  /** YYYY-MM-DD */
  published_on: string;
}

/** All posts, newest first. */
export const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('published_on', { ascending: false })
    .order('created_at', { ascending: false });
  if (error) throw new Error(`Could not load posts: ${error.message}`);
  return data;
};

export const getPost = async (slug: string): Promise<Post | null> => {
  const { data, error } = await supabase.from('posts').select('*').eq('slug', slug).maybeSingle();
  if (error) throw new Error(`Could not load post: ${error.message}`);
  return data;
};

export const readMinutes = (p: Post) => Math.max(1, Math.round(p.content.split(/\s+/).length / 220));

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Blog pages render on request, so a new post shows up without a rebuild.
    Vercel's edge keeps each page for a minute, then refreshes it in the background. */
export const CACHE = 'public, max-age=0, s-maxage=60, stale-while-revalidate=600';
