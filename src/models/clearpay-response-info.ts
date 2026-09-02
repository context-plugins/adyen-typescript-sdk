import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClearpayResponseInfo = {
  supportUrl?: string;
};

export const clearpayResponseInfoSchema: Schema<ClearpayResponseInfo> = s.object<ClearpayResponseInfo>({
  supportUrl: s.optional(s.string()),
});
