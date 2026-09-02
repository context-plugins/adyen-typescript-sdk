import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoredPaymentMethod3 = {
  bankAccountNumber?: string;
  bankLocationId?: string;
  brand?: string;
  cashtag?: string;
  expiryMonth?: string;
  expiryYear?: string;
  externalToken?: string;
  holderName?: string;
  iban?: string;
  id?: string;
  label?: string;
  lastFour?: string;
  name?: string;
  networkTxReference?: string;
  ownerName?: string;
  shopperEmail?: string;
  supportedRecurringProcessingModels?: string[];
  supportedShopperInteractions?: string[];
  type?: string;
};

export const storedPaymentMethod3Schema: Schema<StoredPaymentMethod3> = s.object<StoredPaymentMethod3>({
  bankAccountNumber: s.optional(s.string()),
  bankLocationId: s.optional(s.string()),
  brand: s.optional(s.string()),
  cashtag: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  externalToken: s.optional(s.string()),
  holderName: s.optional(s.string()),
  iban: s.optional(s.string()),
  id: s.optional(s.string()),
  label: s.optional(s.string()),
  lastFour: s.optional(s.string()),
  name: s.optional(s.string()),
  networkTxReference: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  supportedRecurringProcessingModels: s.optional(s.array(s.string())),
  supportedShopperInteractions: s.optional(s.array(s.string())),
  type: s.optional(s.string()),
});
