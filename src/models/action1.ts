import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Action1 = {
  /** The code identifying the action that needs to be completed. */
  actionCode: string;
  /** Indicates whether this action has been successfully completed. */
  resolved: boolean;
};

export const action1Schema: Schema<Action1> = s.object<Action1>({
  actionCode: s.string(),
  resolved: s.boolean(),
});
