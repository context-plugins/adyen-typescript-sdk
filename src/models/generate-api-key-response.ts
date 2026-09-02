import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenerateApiKeyResponse = {
  apiKey: string;
};

export const generateApiKeyResponseSchema: Schema<GenerateApiKeyResponse> = s.object<GenerateApiKeyResponse>({
  apiKey: s.string(),
});
