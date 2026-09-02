import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AchAccountIdentifier = {
  accountLastDigits?: string;
  accountNumber: string;
  isTokenized?: boolean;
  routingNumber: string;
};

export const achAccountIdentifierSchema: Schema<AchAccountIdentifier> = s.object<AchAccountIdentifier>({
  accountLastDigits: s.optional(s.string()),
  accountNumber: s.string(),
  isTokenized: s.optional(s.boolean()),
  routingNumber: s.string(),
});
