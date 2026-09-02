import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountsReq = {
  currency: string;
  requestedAmount: number;
  cashBackAmount?: number;
  tipAmount?: number;
  paidAmount?: number;
  minimumAmountToDeliver?: number;
  maximumCashBackAmount?: number;
  minimumSplitAmount?: number;
};

export const amountsReqSchema: Schema<AmountsReq> = s.object<AmountsReq>({
  currency: s.string(),
  requestedAmount: s.number(),
  cashBackAmount: s.optional(s.number()),
  tipAmount: s.optional(s.number()),
  paidAmount: s.optional(s.number()),
  minimumAmountToDeliver: s.optional(s.number()),
  maximumCashBackAmount: s.optional(s.number()),
  minimumSplitAmount: s.optional(s.number()),
  _keysMap: {
    currency: "Currency",
    requestedAmount: "RequestedAmount",
    cashBackAmount: "CashBackAmount",
    tipAmount: "TipAmount",
    paidAmount: "PaidAmount",
    minimumAmountToDeliver: "MinimumAmountToDeliver",
    maximumCashBackAmount: "MaximumCashBackAmount",
    minimumSplitAmount: "MinimumSplitAmount",
  },
});
