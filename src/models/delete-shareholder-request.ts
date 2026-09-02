import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteShareholderRequest = {
  accountHolderCode: string;
  shareholderCodes: string[];
};

export const deleteShareholderRequestSchema: Schema<DeleteShareholderRequest> =
  s.object<DeleteShareholderRequest>({
    accountHolderCode: s.string(),
    shareholderCodes: s.array(s.string()),
  });
