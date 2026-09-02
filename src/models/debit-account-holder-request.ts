import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { split1Schema, type Split1 } from "./split1.js";

export type DebitAccountHolderRequest = {
  accountHolderCode: string;
  amount: Amount;
  bankAccountUuid: string;
  description?: string;
  merchantAccount: string;
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
