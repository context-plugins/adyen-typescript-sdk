import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Sale information intended for the Issuer. Send to the Acquirer if present. */
export type SaleToIssuerData1 = {
  /** Label to print on the bank statement. */
  statementReference?: string;
};

export const saleToIssuerData1Schema: Schema<SaleToIssuerData1> = s.object<SaleToIssuerData1>({
  statementReference: s.optional(s.string()),
  _keysMap: {
    statementReference: "StatementReference",
  },
});
