import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateTypeSchema, type StateType } from "./state-type.js";

export type UpdateAccountHolderStateRequest = {
  /** The code of the Account Holder on which to update the state. */
  accountHolderCode: string;
  /** If true, disable the requested state. If false, enable the requested state. */
  disable: boolean;
  /** The reason that the state is being updated. >Required if the state is being disabled. */
  reason?: string;
  /** The state to be updated. >Permitted values are: `Processing`, `Payout` */
  stateType: StateType;
};

export const updateAccountHolderStateRequestSchema: Schema<UpdateAccountHolderStateRequest> =
  s.object<UpdateAccountHolderStateRequest>({
    accountHolderCode: s.string(),
    disable: s.boolean(),
    reason: s.optional(s.string()),
    stateType: stateTypeSchema,
  });
