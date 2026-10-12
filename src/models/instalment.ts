import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instalmentTypeSchema, type InstalmentType } from "./instalment-type.js";
import { periodUnit1Schema, type PeriodUnit1 } from "./period-unit1.js";

export type Instalment = {
  /**
   * Type of instalment transaction. For requesting an instalment payment transaction. Possible
   * values:
   * * **DeferredInstalments**
   * * **EqualInstalments**
   * * **InequalInstalments**
   */
  instalmentType?: InstalmentType;
  /**
   * Sequence number of the instalment. For an instalment payment transaction, number of the
   * payment, from 1 to TotalNbOfPayments.
   */
  sequenceNumber?: number;
  /** Identification of an instalment plan. */
  planId?: string;
  /** Period of time with defined unit of time. A period between 2 payment instalments. */
  period?: number;
  /**
   * Type of instalment transaction. Possible values:
   * * **Annual**
   * * **Daily**
   * * **Monthly**
   * * **Weekly**
   */
  periodUnit?: PeriodUnit1;
  /** First date of a payment. For instalment, the date of the first payments, if not immediate. */
  firstPaymentDate?: string;
  /** Total number of payments. For instalment, the number of payments, including the first one. */
  totalNbOfPayments?: number;
  /** Sum of a collection of amounts. Total amount of the payment instalments. */
  cumulativeAmount?: number;
  /** First amount of the payment instalments. */
  firstAmount?: number;
  /** Charges related to a transaction. Charge related to the payment instalments. */
  charges?: number;
};

export const instalmentSchema: Schema<Instalment> = s.object<Instalment>({
  instalmentType: s.optional(s.lazy(() => instalmentTypeSchema)),
  sequenceNumber: s.optional(s.int()),
  planId: s.optional(s.string()),
  period: s.optional(s.int()),
  periodUnit: s.optional(s.lazy(() => periodUnit1Schema)),
  firstPaymentDate: s.optional(s.dateOnly()),
  totalNbOfPayments: s.optional(s.int()),
  cumulativeAmount: s.optional(s.float64()),
  firstAmount: s.optional(s.float64()),
  charges: s.optional(s.float64()),
  _keysMap: {
    instalmentType: "InstalmentType",
    sequenceNumber: "SequenceNumber",
    planId: "PlanID",
    period: "Period",
    periodUnit: "PeriodUnit",
    firstPaymentDate: "FirstPaymentDate",
    totalNbOfPayments: "TotalNbOfPayments",
    cumulativeAmount: "CumulativeAmount",
    firstAmount: "FirstAmount",
    charges: "Charges",
  },
});
