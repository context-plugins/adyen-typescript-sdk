import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TokenDetails = {
  tokenData?: Record<string, string>;
  tokenDataType?: string;
};

export const tokenDetailsSchema: Schema<TokenDetails> = s.object<TokenDetails>({
  tokenData: s.optional(s.record(s.string(), s.string())),
  tokenDataType: s.optional(s.string()),
});
