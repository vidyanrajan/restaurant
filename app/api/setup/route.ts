import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: 'test@muttonraja.com',
    password: 'admin123'
  });
  return Response.json({ data, error });
}
