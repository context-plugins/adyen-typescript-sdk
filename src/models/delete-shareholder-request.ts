import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteShareholderRequest = {
  /** The code of the Account Holder from which to delete the Shareholders. */
  accountHolderCode: string;
  /** The code(s) of the Shareholders to be deleted. */
  shareholderCodes: string[];
};

export const deleteShareholderRequestSchema: Schema<DeleteShareholderRequest> =
  s.object<DeleteShareholderRequest>({
    accountHolderCode: s.string(),
    shareholderCodes: s.array(s.string()),
  });
