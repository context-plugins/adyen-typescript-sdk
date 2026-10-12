import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteBankAccountRequest = {
  /** The code of the Account Holder from which to delete the Bank Account(s). */
  accountHolderCode: string;
  /** The code(s) of the Bank Accounts to be deleted. */
  bankAccountUuiDs: string[];
};

export const deleteBankAccountRequestSchema: Schema<DeleteBankAccountRequest> =
  s.object<DeleteBankAccountRequest>({
    accountHolderCode: s.string(),
    bankAccountUuiDs: s.array(s.string()),
    _keysMap: {
      bankAccountUuiDs: "bankAccountUUIDs",
    },
  });
