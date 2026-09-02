import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LogoutRequest = {
  maintenanceAllowed?: boolean;
};

export const logoutRequestSchema: Schema<LogoutRequest> = s.object<LogoutRequest>({
  maintenanceAllowed: s.optional(s.boolean()),
  _keysMap: {
    maintenanceAllowed: "MaintenanceAllowed",
  },
});
