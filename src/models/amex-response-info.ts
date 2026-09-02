import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmexResponseInfo = {
  midNumber?: string;
  reuseMidNumber?: boolean;
  serviceLevel?: string;
};

export const amexResponseInfoSchema: Schema<AmexResponseInfo> = s.object<AmexResponseInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.string()),
});
