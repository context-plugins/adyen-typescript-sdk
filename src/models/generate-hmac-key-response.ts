import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenerateHmacKeyResponse = {
  hmacKey: string;
};

export const generateHmacKeyResponseSchema: Schema<GenerateHmacKeyResponse> =
  s.object<GenerateHmacKeyResponse>({
    hmacKey: s.string(),
  });
