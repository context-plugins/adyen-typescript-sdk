import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type210, type210Schema } from "./type210.js";

export type ForceRebootDetails = {
  /**
   * The type of terminal action. The value **ForceReboot** triggers an immediate reboot of the
   * specified terminal(s).
   *
   * @default Type210.ForceReboot
   */
  type?: Type210;
};

export const forceRebootDetailsSchema: Schema<ForceRebootDetails> = s.object<ForceRebootDetails>({
  type: s.defaulted(type210Schema, Type210.ForceReboot),
});
