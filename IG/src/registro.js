import { supabase } from '../supabase-config.js';

document.getElementById('registroForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const nombre = document.getElementById('nombre').value;
  const username = document.getElementById('username').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nombre,
        username
      }
    }
  });

  if (error) alert(error.message);
  else alert('Registro exitoso');
});