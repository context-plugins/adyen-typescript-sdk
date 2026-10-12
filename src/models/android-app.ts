import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { androidAppErrorSchema, type AndroidAppError } from "./android-app-error.js";
import { status7Schema, type Status7 } from "./status7.js";

export type AndroidApp = {
  /**
   * The description that was provided when uploading the app. The description is not shown on the
   * terminal.
   */
  description?: string;
  /**
   * The error code of the Android app with the `status` of either **error** or **invalid**.
   *
   * @deprecated
   */
  errorCode?: string;
  /** The list of errors of the Android app. */
  errors?: AndroidAppError[];
  /** The unique identifier of the app. */
  id: string;
  /** The app name that is shown on the terminal. */
  label?: string;
  /** The package name that uniquely identifies the Android app. */
  packageName?: string;
  /**
   * The status of the app. Possible values:
   * * `processing`: the app is being signed and converted to a format that the terminal can handle.
   * * `error`: something went wrong. Check that the app matches the
   *   [requirements](https://docs.adyen.com/point-of-sale/android-terminals/app-requirements).
   * * `invalid`: there is something wrong with the APK file of the app.
   * * `ready`: the app has been signed and converted.
   * * `archived`: the app is no longer available.
   */
  status: Status7;
  /** The version number of the app. */
  versionCode?: number;
  /** The app version number that is shown on the terminal. */
  versionName?: string;
};

export const androidAppSchema: Schema<AndroidApp> = s.object<AndroidApp>({
  description: s.optional(s.string()),
  errorCode: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => androidAppErrorSchema))),
  id: s.string(),
  label: s.optional(s.string()),
  packageName: s.optional(s.string()),
  status: status7Schema,
  versionCode: s.optional(s.int()),
  versionName: s.optional(s.string()),
});
