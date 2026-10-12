import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KioskModeSettings = {
  /** List of package names for apps allowed to run in kiosk mode. */
  allowedAppsInKioskMode?: string[];
  /**
   * The package name of the app to launch on startup. This must be one of the apps included in
   * `allowedAppsInKioskMode`.
   */
  kioskAppOnStartup?: string;
};

export const kioskModeSettingsSchema: Schema<KioskModeSettings> = s.object<KioskModeSettings>({
  allowedAppsInKioskMode: s.optional(s.array(s.string())),
  kioskAppOnStartup: s.optional(s.string()),
});
