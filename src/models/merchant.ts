import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataCenterSchema, type DataCenter } from "./data-center.js";
import { merchantLinks2Schema, type MerchantLinks2 } from "./merchant-links2.js";

export type Merchant = {
  links?: MerchantLinks2;
  captureDelay?: string;
  companyId?: string;
  dataCenters?: DataCenter[];
  defaultShopperInteraction?: string;
  description?: string;
  id?: string;
  merchantCity?: string;
  name?: string;
  pricingPlan?: string;
  primarySettlementCurrency?: string;
  reference?: string;
  shopWebAddress?: string;
  status?: string;
};

export const merchantSchema: Schema<Merchant> = s.object<Merchant>({
  links: s.optional(s.lazy(() => merchantLinks2Schema)),
  captureDelay: s.optional(s.string()),
  companyId: s.optional(s.string()),
  dataCenters: s.optional(s.array(s.lazy(() => dataCenterSchema))),
  defaultShopperInteraction: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  merchantCity: s.optional(s.string()),
  name: s.optional(s.string()),
  pricingPlan: s.optional(s.string()),
  primarySettlementCurrency: s.optional(s.string()),
  reference: s.optional(s.string()),
  shopWebAddress: s.optional(s.string()),
  status: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
