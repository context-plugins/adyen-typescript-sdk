import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HomeScreenSettings1 = {
  hideNavigationBar?: boolean;
  showPaymentsMenu?: boolean;
  showSettingsMenu?: boolean;
};

export const homeScreenSettings1Schema: Schema<HomeScreenSettings1> = s.object<HomeScreenSettings1>({
  hideNavigationBar: s.optional(s.boolean()),
  showPaymentsMenu: s.optional(s.boolean()),
  showSettingsMenu: s.optional(s.boolean()),
});
