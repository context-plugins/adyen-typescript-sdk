import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Sale information intended for the Issuer. The POI System receives this information and sends it
 * to the Acquirer for the Issuer without any change.
 */
export type SaleToIssuerData = {
  /** Label to print on the bank statement. */
  statementReference?: string;
};

export const saleToIssuerDataSchema: Schema<SaleToIssuerData> = s.object<SaleToIssuerData>({
  statementReference: s.optional(s.string()),
  _keysMap: {
    statementReference: "StatementReference",
  },
});
