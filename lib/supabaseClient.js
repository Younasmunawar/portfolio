import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rokefawlmxqbajswdvff.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJva2VmYXdsbXhxYmFqc3dkdmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODIyOTIsImV4cCI6MjA2NTI1ODI5Mn0.-lqFXQH4C6q_MBoe1CmuXUfD3J7X3uj4SlToWLKZB5I';
export const supabase = createClient(supabaseUrl, supabaseKey);
