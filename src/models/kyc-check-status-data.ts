import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckSummary2Schema, type KycCheckSummary2 } from "./kyc-check-summary2.js";
import { status32Schema, type Status32 } from "./status32.js";
import { type211Schema, type Type211 } from "./type211.js";

export type KycCheckStatusData = {
  /** A list of the fields required for execution of the check. */
  requiredFields?: string[];
  /**
   * The status of the check.
   *
   * Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**,
   * **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.
   */
  status: Status32;
  /** A summary of the execution of the check. */
  summary?: KycCheckSummary2;
  /**
   * The type of check.
   *
   * Possible values:
   *
   *  * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by
   *    **PAYOUT_METHOD_VERIFICATION** in v6 and later.
   *
   *  * **COMPANY_VERIFICATION**
   *
   *   * **CARD_VERIFICATION**
   *
   * * **IDENTITY_VERIFICATION**
   *
   * * **LEGAL_ARRANGEMENT_VERIFICATION**
   *
   * * **NONPROFIT_VERIFICATION**
   *
   *  * **PASSPORT_VERIFICATION**
   *
   * * **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.
   *
   * * **PCI_VERIFICATION**
   */
  type: Type211;
};

export const kycCheckStatusDataSchema: Schema<KycCheckStatusData> = s.object<KycCheckStatusData>({
  requiredFields: s.optional(s.array(s.string())),
  status: status32Schema,
  summary: s.optional(s.lazy(() => kycCheckSummary2Schema)),
  type: type211Schema,
});
