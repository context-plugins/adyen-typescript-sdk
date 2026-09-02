import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { minorUnitsMonetaryValueSchema, type MinorUnitsMonetaryValue } from "./minor-units-monetary-value.js";
import { supportedCardTypes2Schema, type SupportedCardTypes2 } from "./supported-card-types2.js";

export type StoreAndForward = {
  maxAmount?: MinorUnitsMonetaryValue[];
  maxPayments?: number;
  supportedCardTypes?: SupportedCardTypes2;
};

export const storeAndForwardSchema: Schema<StoreAndForward> = s.object<StoreAndForward>({
  maxAmount: s.optional(s.array(s.lazy(() => minorUnitsMonetaryValueSchema))),
  maxPayments: s.optional(s.number()),
  supportedCardTypes: s.optional(s.lazy(() => supportedCardTypes2Schema)),
});
