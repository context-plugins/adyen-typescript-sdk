import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstalledApKs = {
  /** The date and time when the app was installed. */
  confirmationDate?: Date;
  /** The package name of the app. */
  packageName?: string;
  /** The version name of the app. */
  versionName?: string;
};

export const installedApKsSchema: Schema<InstalledApKs> = s.object<InstalledApKs>({
  confirmationDate: s.optional(s.dateTime()),
  packageName: s.optional(s.string()),
  versionName: s.optional(s.string()),
});
