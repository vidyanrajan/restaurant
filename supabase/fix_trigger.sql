-- Drop the trigger first
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Recreate function with better error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  extracted_role text;
  final_role public.user_role;
BEGIN
  extracted_role := new.raw_user_meta_data->>'role';
  
  -- Default to waiter if role is missing or invalid
  IF extracted_role = 'admin' THEN
    final_role := 'admin'::public.user_role;
  ELSIF extracted_role = 'delivery' THEN
    final_role := 'delivery'::public.user_role;
  ELSE
    final_role := 'waiter'::public.user_role;
  END IF;

  INSERT INTO public.profiles (id, full_name, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', final_role);
  
  RETURN new;
EXCEPTION WHEN OTHERS THEN
  -- Fallback in case of ANY error: create the profile as waiter
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', 'waiter'::public.user_role);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Re-create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
