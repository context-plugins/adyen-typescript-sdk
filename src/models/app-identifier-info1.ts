import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The app identifier information containing iOS scheme and Android package ID. */
export type AppIdentifierInfo1 = {
  /** The Android package identifier for this app. */
  androidPackageId?: string;
  /** The iOS URL scheme for this app. */
  iosScheme?: string;
};

export const appIdentifierInfo1Schema: Schema<AppIdentifierInfo1> = s.object<AppIdentifierInfo1>({
  androidPackageId: s.optional(s.string()),
  iosScheme: s.optional(s.string()),
});
