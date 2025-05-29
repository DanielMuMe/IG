import { supabase } from '../supabase-config.js';

const user = await supabase.auth.getUser();

if (user.error) {
  alert("No has iniciado sesión");
} else {
  const { data } = await supabase.from('usuarios').select('*').eq('id', user.data.user.id);
  console.log(data);
}