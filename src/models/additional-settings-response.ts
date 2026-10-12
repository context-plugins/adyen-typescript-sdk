import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalSettingsResponse = {
  /** Object containing list of event codes for which the notification will not be sent. */
  excludeEventCodes?: string[];
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

export const additionalSettingsResponseSchema: Schema<AdditionalSettingsResponse> =
  s.object<AdditionalSettingsResponse>({
    excludeEventCodes: s.optional(s.array(s.string())),
    includeEventCodes: s.optional(s.array(s.string())),
    properties: s.optional(s.record(s.string(), s.boolean())),
  });
