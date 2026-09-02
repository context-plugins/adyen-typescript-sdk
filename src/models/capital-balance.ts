import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CapitalBalance = {
  currency: string;
  fee: number;
  principal: number;
  total: number;
};

export const capitalBalanceSchema: Schema<CapitalBalance> = s.object<CapitalBalance>({
  currency: s.string(),
  fee: s.number(),
  principal: s.number(),
  total: s.number(),
});
