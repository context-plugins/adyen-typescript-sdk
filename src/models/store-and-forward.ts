import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { minorUnitsMonetaryValueSchema, type MinorUnitsMonetaryValue } from "./minor-units-monetary-value.js";
import { supportedCardTypes2Schema, type SupportedCardTypes2 } from "./supported-card-types2.js";

export type StoreAndForward = {
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

export const storeAndForwardSchema: Schema<StoreAndForward> = s.object<StoreAndForward>({
  maxAmount: s.optional(s.array(s.lazy(() => minorUnitsMonetaryValueSchema))),
  maxPayments: s.optional(s.int()),
  supportedCardTypes: s.optional(s.lazy(() => supportedCardTypes2Schema)),
});
