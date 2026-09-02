import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateTypeSchema, type StateType } from "./state-type.js";

export type UpdateAccountHolderStateRequest = {
  accountHolderCode: string;
  disable: boolean;
  reason?: string;
  stateType: StateType;
};

export const updateAccountHolderStateRequestSchema: Schema<UpdateAccountHolderStateRequest> =
  s.object<UpdateAccountHolderStateRequest>({
    accountHolderCode: s.string(),
    disable: s.boolean(),
    reason: s.optional(s.string()),
    stateType: stateTypeSchema,
  });
