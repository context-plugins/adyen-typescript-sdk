import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Empty. Content of the Logout Request message. */
export type LogoutRequest = {
  /**
   * Indicates that the POI terminal is able to or has to go to maintenance. Sent in the Logout
   * Request to express that after closing the session, the POI may go to maintenance.
   *
   * @default false
   */
  maintenanceAllowed?: boolean;
};

export const logoutRequestSchema: Schema<LogoutRequest> = s.object<LogoutRequest>({
  maintenanceAllowed: s.defaulted(s.boolean(), false),
  _keysMap: {
    maintenanceAllowed: "MaintenanceAllowed",
  },
});
