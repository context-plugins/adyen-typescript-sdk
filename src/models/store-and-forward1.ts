import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { minorUnitsMonetaryValueSchema, type MinorUnitsMonetaryValue } from "./minor-units-monetary-value.js";
import { supportedCardTypes2Schema, type SupportedCardTypes2 } from "./supported-card-types2.js";

/**
 * Settings for store-and-forward offline payments. The `maxAmount`, `maxPayments`, and
 * `supportedCardTypes` parameters must be configured, either in the request or inherited from a
 * higher level in your account structure.
 */
export type StoreAndForward1 = {
  /** The maximum amount that the terminal accepts for a single store-and-forward payment. */
  maxAmount?: MinorUnitsMonetaryValue[];
  /**
   * The maximum number of store-and-forward transactions per terminal that you can process while
   * offline.
   */
  maxPayments?: number;
  /**
   * The type of card for which the terminal accepts store-and-forward payments. You can specify
   * multiple card types.
   */
  supportedCardTypes?: SupportedCardTypes2;
};

export const storeAndForward1Schema: Schema<StoreAndForward1> = s.object<StoreAndForward1>({
  maxAmount: s.optional(s.array(s.lazy(() => minorUnitsMonetaryValueSchema))),
  maxPayments: s.optional(s.int()),
  supportedCardTypes: s.optional(s.lazy(() => supportedCardTypes2Schema)),
});
