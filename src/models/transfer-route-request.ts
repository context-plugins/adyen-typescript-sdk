import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterparty1Schema, type Counterparty1 } from "./counterparty1.js";
import { priority1Schema, type Priority1 } from "./priority1.js";

export type TransferRouteRequest = {
  balanceAccountId?: string;
  balancePlatform: string;
  category: "bank";
  counterparty?: Counterparty1;
  country?: string;
  currency: string;
  priorities?: Priority1[];
};

export const transferRouteRequestSchema: Schema<TransferRouteRequest> = s.object<TransferRouteRequest>({
  balanceAccountId: s.optional(s.string()),
  balancePlatform: s.string(),
  category: s.literal("bank"),
  counterparty: s.optional(s.lazy(() => counterparty1Schema)),
  country: s.optional(s.string()),
  currency: s.string(),
  priorities: s.optional(s.array(s.lazy(() => priority1Schema))),
});
