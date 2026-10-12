import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type61, type61Schema } from "./type61.js";

export type ReleaseUpdateDetails = {
  /** Type of terminal action: Update Release. @default Type61.ReleaseUpdate */
  type?: Type61;
  /**
   * Boolean flag that tells if the terminal should update at the first next maintenance call. If
   * false, terminal will update on its configured reboot time.
   */
  updateAtFirstMaintenanceCall?: boolean;
};

export const releaseUpdateDetailsSchema: Schema<ReleaseUpdateDetails> = s.object<ReleaseUpdateDetails>({
  type: s.defaulted(type61Schema, Type61.ReleaseUpdate),
  updateAtFirstMaintenanceCall: s.optional(s.boolean()),
});
