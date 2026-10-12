import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type InterchangeData = {
  /** The currency and value of the adjusted interchange fee. */
  interchangeAmount?: Amount17;
  /**
   * A 3-character alphanumeric code assigned by Visa that identifies the specific interchange
   * reimbursement program a transaction qualified for. The code is assigned based on the card type,
   * entry mode, and security data provided.
   */
  interchangeRateIndicator?: string;
  /**
   * The type of events data.
   *
   * Possible values:
   *
   *  - **interchangeData**: information about the interchange fee applied to a transaction.
   *
   * @default "interchangeData"
   */
  type?: "interchangeData";
};

export const interchangeDataSchema: Schema<InterchangeData> = s.object<InterchangeData>({
  interchangeAmount: s.optional(s.lazy(() => amount17Schema)),
  interchangeRateIndicator: s.optional(s.string()),
  type: s.defaulted(s.literal("interchangeData"), "interchangeData"),
});
