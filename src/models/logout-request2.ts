import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LogoutRequest2 = {
  maintenanceAllowed?: boolean;
};

export const logoutRequest2Schema: Schema<LogoutRequest2> = s.object<LogoutRequest2>({
  maintenanceAllowed: s.optional(s.boolean()),
  _keysMap: {
    maintenanceAllowed: "MaintenanceAllowed",
  },
});
