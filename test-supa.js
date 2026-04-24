const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function test() {
  const { data, error } = await supabase.auth.signUp({
    email: 'tester3@muttonraja.com',
    password: 'password123'
  });
  console.log("Signup Result:", data, error);

  if (data?.user) {
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user.id);
    console.log("Profile:", profile);
  }
}

test();
