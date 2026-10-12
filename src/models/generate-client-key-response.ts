import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenerateClientKeyResponse = {
  /** Generated client key */
  clientKey: string;
};

export const generateClientKeyResponseSchema: Schema<GenerateClientKeyResponse> =
  s.object<GenerateClientKeyResponse>({
    clientKey: s.string(),
  });
