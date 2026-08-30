import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = "https://rnojxbbogulutfbbvbzv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJub2p4YmJvZ3VsdXRmYmJ2Ynp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwNjQxNjYsImV4cCI6MjEwMzY0MDE2Nn0.0drsXFLQXV06rgyfC7beX9d4lXJaAKT3xX8mxIMZVw4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ===================================================
// NEW: Function to register/sign up a new user
// ===================================================
export async function signUpUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    alert(error.message)
    return null
  }

  alert('Account created! Please check your email to confirm registration.')
  return data.user
}

// Log in an existing user
export async function loginUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    alert(error.message)
    return null
  }

  return data.user
}

// Log out the current user
export async function logoutUser() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    alert(error.message)
  } else {
    alert('Logged out successfully!')
  }
}

// Check if a user is currently logged in
export async function getUserSession() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}