import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountsResp1 = {
  currency?: string;
  authorizedAmount: number;
  totalRebatesAmount?: number;
  totalFeesAmount?: number;
  cashBackAmount?: number;
  tipAmount?: number;
};

export const amountsResp1Schema: Schema<AmountsResp1> = s.object<AmountsResp1>({
  currency: s.optional(s.string()),
  authorizedAmount: s.number(),
  totalRebatesAmount: s.optional(s.number()),
  totalFeesAmount: s.optional(s.number()),
  cashBackAmount: s.optional(s.number()),
  tipAmount: s.optional(s.number()),
  _keysMap: {
    currency: "Currency",
    authorizedAmount: "AuthorizedAmount",
    totalRebatesAmount: "TotalRebatesAmount",
    totalFeesAmount: "TotalFeesAmount",
    cashBackAmount: "CashBackAmount",
    tipAmount: "TipAmount",
  },
});
