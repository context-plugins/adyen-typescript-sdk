import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AchAccountIdentifier1 = {
  accountLastDigits?: string;
  accountNumber: string;
  isTokenized?: boolean;
  routingNumber: string;
};

export const achAccountIdentifier1Schema: Schema<AchAccountIdentifier1> = s.object<AchAccountIdentifier1>({
  accountLastDigits: s.optional(s.string()),
  accountNumber: s.string(),
  isTokenized: s.optional(s.boolean()),
  routingNumber: s.string(),
});
