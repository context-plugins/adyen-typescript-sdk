import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleToIssuerData = {
  statementReference?: string;
};

export const saleToIssuerDataSchema: Schema<SaleToIssuerData> = s.object<SaleToIssuerData>({
  statementReference: s.optional(s.string()),
  _keysMap: {
    statementReference: "StatementReference",
  },
});
