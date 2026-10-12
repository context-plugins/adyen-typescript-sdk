import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantInfoCounterparty2Schema, type GrantInfoCounterparty2 } from "./grant-info-counterparty2.js";

export type CapitalGrantInfo = {
  /** An object containing the details of the receiving party of the grant. */
  counterparty?: GrantInfoCounterparty2;
  /** The identifier of the grant account used for the grant. */
  grantAccountId: string;
  /**
   * The identifier of the grant offer that has been selected and from which the grant details will
   * be used.
   */
  grantOfferId: string;
};

export const capitalGrantInfoSchema: Schema<CapitalGrantInfo> = s.object<CapitalGrantInfo>({
  counterparty: s.optional(s.lazy(() => grantInfoCounterparty2Schema)),
  grantAccountId: s.string(),
  grantOfferId: s.string(),
});
