import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Balance = {
  available: number;
  balance: number;
  currency: string;
  pending?: number;
  pendingAvailable?: number;
  reserved: number;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  available: s.number(),
  balance: s.number(),
  currency: s.string(),
  pending: s.optional(s.number()),
  pendingAvailable: s.optional(s.number()),
  reserved: s.number(),
});
