import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cbgqwkanzdnvalvfzght.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZ3F3a2FuemRudmFsdmZ6Z2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MzUyMTcsImV4cCI6MjAzMTUxMTIxN30.RlP563F9TYdRqpr-dLRsMTgY3P2KwNKsJ8Xw3FqUiR0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})