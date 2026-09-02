import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteSignatoriesRequest = {
  accountHolderCode: string;
  signatoryCodes: string[];
};

export const deleteSignatoriesRequestSchema: Schema<DeleteSignatoriesRequest> =
  s.object<DeleteSignatoriesRequest>({
    accountHolderCode: s.string(),
    signatoryCodes: s.array(s.string()),
  });
