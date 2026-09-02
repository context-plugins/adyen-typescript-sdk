import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount14Schema, type Amount14 } from "./amount14.js";
import { amount15Schema, type Amount15 } from "./amount15.js";
import { amount16Schema, type Amount16 } from "./amount16.js";
import { type27Schema, type Type27 } from "./type27.js";

export type CheckoutVoucherAction = {
  alternativeReference?: string;
  collectionInstitutionNumber?: string;
  downloadUrl?: string;
  entity?: string;
  expiresAt?: string;
  initialAmount?: Amount14;
  instructionsUrl?: string;
  issuer?: string;
  maskedTelephoneNumber?: string;
  merchantName?: string;
  merchantReference?: string;
  passCreationToken?: string;
  paymentData?: string;
  paymentMethodType?: string;
  reference?: string;
  shopperEmail?: string;
  shopperName?: string;
  surcharge?: Amount15;
  totalAmount?: Amount16;
  type: Type27;
  url?: string;
};

export const checkoutVoucherActionSchema: Schema<CheckoutVoucherAction> = s.object<CheckoutVoucherAction>({
  alternativeReference: s.optional(s.string()),
  collectionInstitutionNumber: s.optional(s.string()),
  downloadUrl: s.optional(s.string()),
  entity: s.optional(s.string()),
  expiresAt: s.optional(s.string()),
  initialAmount: s.optional(s.lazy(() => amount14Schema)),
  instructionsUrl: s.optional(s.string()),
  issuer: s.optional(s.string()),
  maskedTelephoneNumber: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  merchantReference: s.optional(s.string()),
  passCreationToken: s.optional(s.string()),
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  reference: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.string()),
  surcharge: s.optional(s.lazy(() => amount15Schema)),
  totalAmount: s.optional(s.lazy(() => amount16Schema)),
  type: type27Schema,
  url: s.optional(s.string()),
});
