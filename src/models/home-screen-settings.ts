import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HomeScreenSettings = {
  hideNavigationBar?: boolean;
  showPaymentsMenu?: boolean;
  showSettingsMenu?: boolean;
};

export const homeScreenSettingsSchema: Schema<HomeScreenSettings> = s.object<HomeScreenSettings>({
  hideNavigationBar: s.optional(s.boolean()),
  showPaymentsMenu: s.optional(s.boolean()),
  showSettingsMenu: s.optional(s.boolean()),
});
