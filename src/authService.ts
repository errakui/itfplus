import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://twqfgcmcgevnzzeldkld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cWZnY21jZ2V2bnp6ZWxka2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMzUwNzEsImV4cCI6MjA0MjcxMTA3MX0.fpIgme8tccLgYOYBavb6eQAyply-jCdrBhKgENv5YsM';


if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key is missing')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function signUpUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) throw error

    console.log('User created successfully:', data)
    return data
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

export async function signInUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) throw error

    console.log('User signed in successfully:', data)
    return data
  } catch (error) {
    console.error('Error signing in user:', error)
    throw error
  }
}