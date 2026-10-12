import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SuspendAccountHolderRequest = {
  /** The code of the account holder to be suspended. */
  accountHolderCode: string;
};

export const suspendAccountHolderRequestSchema: Schema<SuspendAccountHolderRequest> =
  s.object<SuspendAccountHolderRequest>({
    accountHolderCode: s.string(),
  });
