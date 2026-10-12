import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The shopper's browser information. > For 3D Secure, the full object is required for web
 * integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to
 * indicate that your integration can support a redirect in case a payment is routed to 3D Secure 2
 * redirect.
 */
export type BrowserInfo = {
  /** The accept header value of the shopper's browser. */
  acceptHeader: string;
  /**
   * The color depth of the shopper's browser in bits per pixel. This should be obtained by using
   * the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 30, 32 or 48
   * bit color depth.
   */
  colorDepth: number;
  /** Boolean value indicating if the shopper's browser is able to execute Java. */
  javaEnabled: boolean;
  /**
   * Boolean value indicating if the shopper's browser is able to execute JavaScript. A default
   * 'true' value is assumed if the field is not present.
   *
   * @default true
   */
  javaScriptEnabled?: boolean;
  /** The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47). */
  language: string;
  /** The total height of the shopper's device screen in pixels. */
  screenHeight: number;
  /** The total width of the shopper's device screen in pixels. */
  screenWidth: number;
  /** Time difference between UTC time and the shopper's browser local time, in minutes. */
  timeZoneOffset: number;
  /** The user agent value of the shopper's browser. */
  userAgent: string;
};

export const browserInfoSchema: Schema<BrowserInfo> = s.object<BrowserInfo>({
  acceptHeader: s.string(),
  colorDepth: s.int(),
  javaEnabled: s.boolean(),
  javaScriptEnabled: s.defaulted(s.boolean(), true),
  language: s.string(),
  screenHeight: s.int(),
  screenWidth: s.int(),
  timeZoneOffset: s.int(),
  userAgent: s.string(),
});
