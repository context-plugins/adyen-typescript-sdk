import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalTerminalAction = {
  /**
   * The type of terminal action: **InstallAndroidApp**, **UninstallAndroidApp**,
   * **InstallAndroidCertificate**, or **UninstallAndroidCertificate**.
   */
  actionType?: string;
  /** Technical information about the terminal action. */
  config?: string;
  /** The date and time when the action was carried out. */
  confirmedAt?: Date;
  /** The unique ID of the terminal action. */
  id?: string;
  /** The result message for the action. */
  result?: string;
  /** The date and time when the action was scheduled to happen. */
  scheduledAt?: Date;
  /**
   * The status of the terminal action: **pending**, **successful**, **failed**, **cancelled**, or
   * **tryLater**.
   */
  status?: string;
  /** The unique ID of the terminal that the action applies to. */
  terminalId?: string;
};

export const externalTerminalActionSchema: Schema<ExternalTerminalAction> = s.object<ExternalTerminalAction>({
  actionType: s.optional(s.string()),
  config: s.optional(s.string()),
  confirmedAt: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  result: s.optional(s.string()),
  scheduledAt: s.optional(s.dateTime()),
  status: s.optional(s.string()),
  terminalId: s.optional(s.string()),
});
