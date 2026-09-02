import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instalmentTypeSchema, type InstalmentType } from "./instalment-type.js";
import { periodUnit1Schema, type PeriodUnit1 } from "./period-unit1.js";

export type Instalment = {
  instalmentType?: InstalmentType;
  sequenceNumber?: number;
  planId?: string;
  period?: number;
  periodUnit?: PeriodUnit1;
  firstPaymentDate?: string;
  totalNbOfPayments?: number;
  cumulativeAmount?: number;
  firstAmount?: number;
  charges?: number;
};

export const instalmentSchema: Schema<Instalment> = s.object<Instalment>({
  instalmentType: s.optional(s.lazy(() => instalmentTypeSchema)),
  sequenceNumber: s.optional(s.number()),
  planId: s.optional(s.string()),
  period: s.optional(s.number()),
  periodUnit: s.optional(s.lazy(() => periodUnit1Schema)),
  firstPaymentDate: s.optional(s.dateOnly()),
  totalNbOfPayments: s.optional(s.number()),
  cumulativeAmount: s.optional(s.number()),
  firstAmount: s.optional(s.number()),
  charges: s.optional(s.number()),
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
