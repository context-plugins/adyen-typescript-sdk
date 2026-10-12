import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileSchema, type Profile } from "./profile.js";
import { settings1Schema, type Settings1 } from "./settings1.js";

export type WifiProfiles = {
  /** List of remote Wi-Fi profiles. */
  profiles?: Profile[];
  /** General Wi-Fi settings. */
  settings?: Settings1;
};

export const wifiProfilesSchema: Schema<WifiProfiles> = s.object<WifiProfiles>({
  profiles: s.optional(s.array(s.lazy(() => profileSchema))),
  settings: s.optional(s.lazy(() => settings1Schema)),
});
