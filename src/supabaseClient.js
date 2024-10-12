import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twqfgcmcgevnzzeldkld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cWZnY21jZ2V2bnp6ZWxka2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMzUwNzEsImV4cCI6MjA0MjcxMTA3MX0.fpIgme8tccLgYOYBavb6eQAyply-jCdrBhKgENv5YsM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
