import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KioskModeSettings = {
  allowedAppsInKioskMode?: string[];
  kioskAppOnStartup?: string;
};

export const kioskModeSettingsSchema: Schema<KioskModeSettings> = s.object<KioskModeSettings>({
  allowedAppsInKioskMode: s.optional(s.array(s.string())),
  kioskAppOnStartup: s.optional(s.string()),
});
