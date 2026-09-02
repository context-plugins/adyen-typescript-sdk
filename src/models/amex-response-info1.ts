import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmexResponseInfo1 = {
  midNumber?: string;
  reuseMidNumber?: boolean;
  serviceLevel?: string;
};

export const amexResponseInfo1Schema: Schema<AmexResponseInfo1> = s.object<AmexResponseInfo1>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.string()),
});
