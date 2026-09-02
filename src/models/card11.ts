import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication1Schema, type Authentication1 } from "./authentication1.js";
import { cardConfiguration2Schema, type CardConfiguration2 } from "./card-configuration2.js";
import { deliveryContact1Schema, type DeliveryContact1 } from "./delivery-contact1.js";
import { expiry2Schema, type Expiry2 } from "./expiry2.js";
import { formFactor1Schema, type FormFactor1 } from "./form-factor1.js";

export type Card11 = {
  authentication?: Authentication1;
  bin?: string;
  brand: string;
  brandVariant: string;
  cardholderName: string;
  configuration?: CardConfiguration2;
  cvc?: string;
  deliveryContact?: DeliveryContact1;
  expiration?: Expiry2;
  formFactor: FormFactor1;
  lastFour?: string;
  number?: string;
  threeDSecure?: string;
  usage?: string;
};

export const card11Schema: Schema<Card11> = s.object<Card11>({
  authentication: s.optional(s.lazy(() => authentication1Schema)),
  bin: s.optional(s.string()),
  brand: s.string(),
  brandVariant: s.string(),
  cardholderName: s.string(),
  configuration: s.optional(s.lazy(() => cardConfiguration2Schema)),
  cvc: s.optional(s.string()),
  deliveryContact: s.optional(s.lazy(() => deliveryContact1Schema)),
  expiration: s.optional(s.lazy(() => expiry2Schema)),
  formFactor: formFactor1Schema,
  lastFour: s.optional(s.string()),
  number: s.optional(s.string()),
  threeDSecure: s.optional(s.string()),
  usage: s.optional(s.string()),
});
