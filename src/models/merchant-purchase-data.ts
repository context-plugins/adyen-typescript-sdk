import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { airline11Schema, type Airline11 } from "./airline11.js";
import { lodging1Schema, type Lodging1 } from "./lodging1.js";

export type MerchantPurchaseData = {
  airline?: Airline11;
  lodging?: Lodging1[];
  type: "merchantPurchaseData";
};

export const merchantPurchaseDataSchema: Schema<MerchantPurchaseData> = s.object<MerchantPurchaseData>({
  airline: s.optional(s.lazy(() => airline11Schema)),
  lodging: s.optional(s.array(s.lazy(() => lodging1Schema))),
  type: s.literal("merchantPurchaseData"),
});
