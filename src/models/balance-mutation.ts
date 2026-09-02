import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BalanceMutation = {
  balance?: number;
  currency?: string;
  received?: number;
  reserved?: number;
};

export const balanceMutationSchema: Schema<BalanceMutation> = s.object<BalanceMutation>({
  balance: s.optional(s.number()),
  currency: s.optional(s.string()),
  received: s.optional(s.number()),
  reserved: s.optional(s.number()),
});
