import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the app. Possible values:
 * * `processing`: the app is being signed and converted to a format that the terminal can handle.
 * * `error`: something went wrong. Check that the app matches the
 *   [requirements](https://docs.adyen.com/point-of-sale/android-terminals/app-requirements).
 * * `invalid`: there is something wrong with the APK file of the app.
 * * `ready`: the app has been signed and converted.
 * * `archived`: the app is no longer available.
 */
export const Status7 = {
  Archived: "archived",
  Error: "error",
  Invalid: "invalid",
  Processing: "processing",
  Ready: "ready",
} as const;
export type Status7 = (typeof Status7)[keyof typeof Status7] | (string & {});

export const status7Schema: EnumSchema<Status7> = s.enumOf<Status7>(Status7);
