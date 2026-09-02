import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address5Schema, type Address5 } from "./address5.js";
import { tokenMandate2Schema, type TokenMandate2 } from "./token-mandate2.js";

export type StoredPaymentMethodResource = {
  alias?: string;
  aliasType?: string;
  billingAddress?: Address5;
  brand?: string;
  cardBin?: string;
  createdAt?: Date;
  expiryMonth?: string;
  expiryYear?: string;
  externalResponseCode?: string;
  externalTokenReference?: string;
  firstPspReference?: string;
  holderName?: string;
  iban?: string;
  id?: string;
  issuerName?: string;
  lastFour?: string;
  mandate?: TokenMandate2;
  name?: string;
  networkTxReference?: string;
  ownerName?: string;
  shopperEmail?: string;
  shopperReference?: string;
  supportedRecurringProcessingModels?: string[];
  type?: string;
};

export const storedPaymentMethodResourceSchema: Schema<StoredPaymentMethodResource> =
  s.object<StoredPaymentMethodResource>({
    alias: s.optional(s.string()),
    aliasType: s.optional(s.string()),
    billingAddress: s.optional(s.lazy(() => address5Schema)),
    brand: s.optional(s.string()),
    cardBin: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    externalResponseCode: s.optional(s.string()),
    externalTokenReference: s.optional(s.string()),
    firstPspReference: s.optional(s.string()),
    holderName: s.optional(s.string()),
    iban: s.optional(s.string()),
    id: s.optional(s.string()),
    issuerName: s.optional(s.string()),
    lastFour: s.optional(s.string()),
    mandate: s.optional(s.lazy(() => tokenMandate2Schema)),
    name: s.optional(s.string()),
    networkTxReference: s.optional(s.string()),
    ownerName: s.optional(s.string()),
    shopperEmail: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
    supportedRecurringProcessingModels: s.optional(s.array(s.string())),
    type: s.optional(s.string()),
  });
