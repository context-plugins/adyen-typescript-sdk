import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnSuspendAccountHolderRequest = {
  accountHolderCode: string;
};

export const unSuspendAccountHolderRequestSchema: Schema<UnSuspendAccountHolderRequest> =
  s.object<UnSuspendAccountHolderRequest>({
    accountHolderCode: s.string(),
  });
