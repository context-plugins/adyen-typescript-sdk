import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { minorUnitsMonetaryValueSchema, type MinorUnitsMonetaryValue } from "./minor-units-monetary-value.js";
import { supportedCardTypes2Schema, type SupportedCardTypes2 } from "./supported-card-types2.js";

export type StoreAndForward1 = {
  maxAmount?: MinorUnitsMonetaryValue[];
  maxPayments?: number;
  supportedCardTypes?: SupportedCardTypes2;
};

export const storeAndForward1Schema: Schema<StoreAndForward1> = s.object<StoreAndForward1>({
  maxAmount: s.optional(s.array(s.lazy(() => minorUnitsMonetaryValueSchema))),
  maxPayments: s.optional(s.number()),
  supportedCardTypes: s.optional(s.lazy(() => supportedCardTypes2Schema)),
});
