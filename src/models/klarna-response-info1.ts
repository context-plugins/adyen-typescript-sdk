import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { region1Schema, type Region1 } from "./region1.js";

/** **klarna** or its variant details */
export type KlarnaResponseInfo1 = {
  /**
   * Indicates the status of [Automatic
   * capture](https://docs.adyen.com/online-payments/capture#automatic-capture).
   */
  autoCapture?: boolean;
  /** The email address for disputes. */
  disputeEmail?: string;
  /** The region of operation. */
  region?: Region1;
  /** The email address of merchant support. */
  supportEmail?: string;
};

export const klarnaResponseInfo1Schema: Schema<KlarnaResponseInfo1> = s.object<KlarnaResponseInfo1>({
  autoCapture: s.optional(s.boolean()),
  disputeEmail: s.optional(s.string()),
  region: s.optional(s.lazy(() => region1Schema)),
  supportEmail: s.optional(s.string()),
});
