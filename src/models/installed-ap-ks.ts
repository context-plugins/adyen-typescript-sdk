import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstalledApKs = {
  confirmationDate?: Date;
  packageName?: string;
  versionName?: string;
};

export const installedApKsSchema: Schema<InstalledApKs> = s.object<InstalledApKs>({
  confirmationDate: s.optional(s.dateTime()),
  packageName: s.optional(s.string()),
  versionName: s.optional(s.string()),
});
