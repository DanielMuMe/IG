import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'; 

const supabaseUrl = 'https://xjdzdnjfkszngdtqdmgz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqZHpkbmpma3N6bmdkdHFkbWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NDkzMjEsImV4cCI6MjA2NDEyNTMyMX0.F3F8E35rNzdsE3BrjxLzHtAWj-Jy3cwx2sFb1JJId3o';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;