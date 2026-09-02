import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClearpayResponseInfo1 = {
  supportUrl?: string;
};

export const clearpayResponseInfo1Schema: Schema<ClearpayResponseInfo1> = s.object<ClearpayResponseInfo1>({
  supportUrl: s.optional(s.string()),
});
