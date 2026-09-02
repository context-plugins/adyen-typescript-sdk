import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantInfoCounterparty2Schema, type GrantInfoCounterparty2 } from "./grant-info-counterparty2.js";

export type CapitalGrantInfo = {
  counterparty?: GrantInfoCounterparty2;
  grantAccountId: string;
  grantOfferId: string;
};

export const capitalGrantInfoSchema: Schema<CapitalGrantInfo> = s.object<CapitalGrantInfo>({
  counterparty: s.optional(s.lazy(() => grantInfoCounterparty2Schema)),
  grantAccountId: s.string(),
  grantOfferId: s.string(),
});
