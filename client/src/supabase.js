import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://yhcfxkoibroxtojrkqsg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDU3MTQyNiwiZXhwIjoxOTM2MTQ3NDI2fQ.JiXjORR-QguxMAvHcDQRaUG763dDTfeOpJt-Q5GkbCU"
);
export { supabase };
