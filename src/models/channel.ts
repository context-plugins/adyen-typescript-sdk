import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform where a payment transaction takes place. This field is optional for filtering out
 * payment methods that are only available on specific platforms. If this value is not set, then we
 * will try to infer it from the `sdkVersion` or `token`.
 *
 * Possible values:
 * * **iOS**
 * * **Android**
 * * **Web**
 */
export const Channel = {
  IOs: "iOS",
  Android: "Android",
  Web: "Web",
} as const;
export type Channel = (typeof Channel)[keyof typeof Channel] | (string & {});

export const channelSchema: EnumSchema<Channel> = s.enumOf<Channel>(Channel);
