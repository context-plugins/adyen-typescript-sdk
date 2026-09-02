import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KioskModeSettings1 = {
  allowedAppsInKioskMode?: string[];
  kioskAppOnStartup?: string;
};

export const kioskModeSettings1Schema: Schema<KioskModeSettings1> = s.object<KioskModeSettings1>({
  allowedAppsInKioskMode: s.optional(s.array(s.string())),
  kioskAppOnStartup: s.optional(s.string()),
});
