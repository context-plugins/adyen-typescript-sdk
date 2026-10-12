import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for the home screen. */
export type HomeScreenSettings1 = {
  /** Hide/show the navigation bar. */
  hideNavigationBar?: boolean;
  /** Show/hide the payments menu. */
  showPaymentsMenu?: boolean;
  /** Show/hide the settings menu. */
  showSettingsMenu?: boolean;
};

export const homeScreenSettings1Schema: Schema<HomeScreenSettings1> = s.object<HomeScreenSettings1>({
  hideNavigationBar: s.optional(s.boolean()),
  showPaymentsMenu: s.optional(s.boolean()),
  showSettingsMenu: s.optional(s.boolean()),
});
