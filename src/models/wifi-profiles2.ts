import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileSchema, type Profile } from "./profile.js";
import { settings1Schema, type Settings1 } from "./settings1.js";

/** Remote Wi-Fi profiles for WPA and WPA2 PSK and EAP Wi-Fi networks. */
export type WifiProfiles2 = {
  /** List of remote Wi-Fi profiles. */
  profiles?: Profile[];
  /** General Wi-Fi settings. */
  settings?: Settings1;
};

export const wifiProfiles2Schema: Schema<WifiProfiles2> = s.object<WifiProfiles2>({
  profiles: s.optional(s.array(s.lazy(() => profileSchema))),
  settings: s.optional(s.lazy(() => settings1Schema)),
});
