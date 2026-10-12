import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppIdentifierInfo = {
  /** The Android package identifier for this app. */
  androidPackageId?: string;
  /** The iOS URL scheme for this app. */
  iosScheme?: string;
};

export const appIdentifierInfoSchema: Schema<AppIdentifierInfo> = s.object<AppIdentifierInfo>({
  androidPackageId: s.optional(s.string()),
  iosScheme: s.optional(s.string()),
});
