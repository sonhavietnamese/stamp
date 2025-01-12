import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  clientPrefix: 'VITE_PUBLIC_',

  client: {
    VITE_PUBLIC_REOWN_PROJECT_ID: z.string().min(1),
  },


  runtimeEnv: import.meta.env,
 
  emptyStringAsUndefined: true,
});