import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduleAccountUpdaterResult = {
  /**
   * Adyen's 16-character unique reference associated with the transaction. This value is globally
   * unique; quote it when communicating with us about this request.
   */
  pspReference: string;
  /**
   * The result of scheduling an Account Updater. If scheduling was successful, this field returns
   * **Success**; otherwise it contains the error message.
   */
  result: string;
};

export const scheduleAccountUpdaterResultSchema: Schema<ScheduleAccountUpdaterResult> =
  s.object<ScheduleAccountUpdaterResult>({
    pspReference: s.string(),
    result: s.string(),
  });
