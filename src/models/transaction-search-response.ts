import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links21Schema, type Links21 } from "./links21.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type TransactionSearchResponse = {
  /** Contains links to the next and previous page whenever applicable. */
  links?: Links21;
  /** Contains the transactions that match the query parameters. */
  data?: Transaction[];
};

export const transactionSearchResponseSchema: Schema<TransactionSearchResponse> =
  s.object<TransactionSearchResponse>({
    links: s.optional(s.lazy(() => links21Schema)),
    data: s.optional(s.array(s.lazy(() => transactionSchema))),
    _keysMap: {
      links: "_links",
    },
  });
