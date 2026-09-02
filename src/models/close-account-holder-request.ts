import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CloseAccountHolderRequest = {
  accountHolderCode: string;
};

export const closeAccountHolderRequestSchema: Schema<CloseAccountHolderRequest> =
  s.object<CloseAccountHolderRequest>({
    accountHolderCode: s.string(),
  });
