import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication1Schema, type Authentication1 } from "./authentication1.js";
import { cardConfiguration2Schema, type CardConfiguration2 } from "./card-configuration2.js";
import { deliveryContact1Schema, type DeliveryContact1 } from "./delivery-contact1.js";
import { formFactor1Schema, type FormFactor1 } from "./form-factor1.js";

export type CardInfo2 = {
  authentication?: Authentication1;
  brand: string;
  brandVariant: string;
  cardholderName: string;
  configuration?: CardConfiguration2;
  deliveryContact?: DeliveryContact1;
  formFactor: FormFactor1;
  threeDSecure?: string;
  usage?: string;
};

export const cardInfo2Schema: Schema<CardInfo2> = s.object<CardInfo2>({
  authentication: s.optional(s.lazy(() => authentication1Schema)),
  brand: s.string(),
  brandVariant: s.string(),
  cardholderName: s.string(),
  configuration: s.optional(s.lazy(() => cardConfiguration2Schema)),
  deliveryContact: s.optional(s.lazy(() => deliveryContact1Schema)),
  formFactor: formFactor1Schema,
  threeDSecure: s.optional(s.string()),
  usage: s.optional(s.string()),
});
