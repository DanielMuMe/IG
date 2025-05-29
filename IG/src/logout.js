import { supabase } from '../supabase-config.js';

await supabase.auth.signOut();
alert('Sesión cerrada');
window.location.href = '../index.html';