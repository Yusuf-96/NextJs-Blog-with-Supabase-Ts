import { createClient } from '@supabase/supabase-js';
import { Database } from '../type/database.type';

interface ISupabase {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;
