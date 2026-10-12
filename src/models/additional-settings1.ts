import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Additional shopper and transaction information to be included in your [standard
 * webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes). Find
 * out more about the available [additional
 * settings](https://docs.adyen.com/development-resources/webhooks/additional-settings).
 */
export type AdditionalSettings1 = {
  /** Object containing list of event codes for which the notification will be sent. */
  includeEventCodes?: string[];
  /**
   * Object containing boolean key-value pairs. The key can be any [standard webhook additional
   * setting](https://docs.adyen.com/development-resources/webhooks/additional-settings), and the
   * value indicates if the setting is enabled. For example, `includeCaptureDelayHours`: **true**
   * means the standard notifications you get will contain the number of hours remaining until the
   * payment will be captured.
   */
  properties?: Record<string, boolean>;
};

export const additionalSettings1Schema: Schema<AdditionalSettings1> = s.object<AdditionalSettings1>({
  includeEventCodes: s.optional(s.array(s.string())),
  properties: s.optional(s.record(s.string(), s.boolean())),
});
