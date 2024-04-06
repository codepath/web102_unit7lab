import { createClient } from '@supabase/supabase-js'
const URL = "";
const API_KEY = ""

console.log(URL, API_KEY);
export const supabase = createClient(URL, API_KEY);

