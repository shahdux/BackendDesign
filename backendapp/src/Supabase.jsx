
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eyytilbotjjbwfkliica.supabase.co'
const supabaseKey = 'sb_publishable_1WlyGAmVGmqJg60gfK7u8g_wAXYxcfc'
export const supabase = createClient(supabaseUrl, supabaseKey)