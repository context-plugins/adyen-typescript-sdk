import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionSchema, type Region } from "./region.js";

export type KlarnaInfo = {
  /**
   * Indicates the status of [Automatic
   * capture](https://docs.adyen.com/online-payments/capture#automatic-capture). Default value:
   * **false**.
   */
  autoCapture?: boolean;
  /** The email address for disputes. */
  disputeEmail: string;
  /** The region of operation. For example, **NA**, **EU**, **CH**, **AU**. */
  region: Region;
  /** The email address of merchant support. */
  supportEmail: string;
};

export const klarnaInfoSchema: Schema<KlarnaInfo> = s.object<KlarnaInfo>({
  autoCapture: s.optional(s.boolean()),
  disputeEmail: s.string(),
  region: regionSchema,
  supportEmail: s.string(),
});
