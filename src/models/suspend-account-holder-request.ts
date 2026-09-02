import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SuspendAccountHolderRequest = {
  accountHolderCode: string;
};

export const suspendAccountHolderRequestSchema: Schema<SuspendAccountHolderRequest> =
  s.object<SuspendAccountHolderRequest>({
    accountHolderCode: s.string(),
  });
