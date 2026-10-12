import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { split1Schema, type Split1 } from "./split1.js";

export type DebitAccountHolderRequest = {
  /** The code of the account holder. */
  accountHolderCode: string;
  /** The amount to be debited from the account holder's bank account. */
  amount: Amount;
  /**
   * The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.
   */
  bankAccountUuid: string;
  /**
   * A description of the direct debit. Maximum length: 35 characters.
   *
   * Allowed characters: **a-z**, **A-Z**, **0-9**, and special characters **&#47;?:().,'+ ";**.
   */
  description?: string;
  /** Your merchant account. */
  merchantAccount: string;
  /**
   * Contains instructions on how to split the funds between the accounts in your platform. The
   * request must have at least one split item.
   */
  splits: Split1[];
};

export const debitAccountHolderRequestSchema: Schema<DebitAccountHolderRequest> =
  s.object<DebitAccountHolderRequest>({
    accountHolderCode: s.string(),
    amount: amountSchema,
    bankAccountUuid: s.string(),
    description: s.optional(s.string()),
    merchantAccount: s.string(),
    splits: s.array(s.lazy(() => split1Schema)),
    _keysMap: {
      bankAccountUuid: "bankAccountUUID",
    },
  });
