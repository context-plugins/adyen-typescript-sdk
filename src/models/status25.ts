import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action1Schema, type Action1 } from "./action1.js";
import { codeSchema, type Code } from "./code.js";

/** Contains the status of the grant. */
export type Status25 = {
  /** A list of actions that need to be completed to proceed with the grant. */
  actions?: Action1[];
  /**
   * The code for the status of the grant. Possible values:
   * - **Pending**
   * - **Active**
   * - **Repaid**
   * - **WrittenOff**
   * - **Failed**
   * - **Revoked**
   * - **Requested**
   * - **Reviewing**
   * - **Approved**
   * - **Rejected**
   * - **Cancelled**
   */
  code: Code;
};

export const status25Schema: Schema<Status25> = s.object<Status25>({
  actions: s.optional(s.array(s.lazy(() => action1Schema))),
  code: codeSchema,
});
