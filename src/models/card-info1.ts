import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication1Schema, type Authentication1 } from "./authentication1.js";
import { cardConfiguration2Schema, type CardConfiguration2 } from "./card-configuration2.js";
import { deliveryContact1Schema, type DeliveryContact1 } from "./delivery-contact1.js";
import { formFactor1Schema, type FormFactor1 } from "./form-factor1.js";

export type CardInfo1 = {
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

export const cardInfo1Schema: Schema<CardInfo1> = s.object<CardInfo1>({
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
