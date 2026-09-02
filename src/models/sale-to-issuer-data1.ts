import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleToIssuerData1 = {
  statementReference?: string;
};

export const saleToIssuerData1Schema: Schema<SaleToIssuerData1> = s.object<SaleToIssuerData1>({
  statementReference: s.optional(s.string()),
  _keysMap: {
    statementReference: "StatementReference",
  },
});
