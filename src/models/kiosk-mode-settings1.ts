import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for kiosk mode. */
export type KioskModeSettings1 = {
  /** List of package names for apps allowed to run in kiosk mode. */
  allowedAppsInKioskMode?: string[];
  /**
   * The package name of the app to launch on startup. This must be one of the apps included in
   * `allowedAppsInKioskMode`.
   */
  kioskAppOnStartup?: string;
};

export const kioskModeSettings1Schema: Schema<KioskModeSettings1> = s.object<KioskModeSettings1>({
  allowedAppsInKioskMode: s.optional(s.array(s.string())),
  kioskAppOnStartup: s.optional(s.string()),
});
