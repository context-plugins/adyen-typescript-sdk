import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteBankAccountRequest = {
  accountHolderCode: string;
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
