import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountAdjustmentSchema, type AmountAdjustment } from "./amount-adjustment.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { balanceMutationSchema, type BalanceMutation } from "./balance-mutation.js";
import { externalReason1Schema, type ExternalReason1 } from "./external-reason1.js";
import { modification2Schema, type Modification2 } from "./modification2.js";
import { reason1Schema, type Reason1 } from "./reason1.js";
import { status24Schema, type Status24 } from "./status24.js";
import { type73Schema, type Type73 } from "./type73.js";
import { eventsDatumSchema, type EventsDatum } from "./unions/events-datum.js";
import { tracingDataSchema, type TracingData } from "./unions/tracing-data.js";
import { trackingDataSchema, type TrackingData } from "./unions/tracking-data.js";

export type TransferEvent = {
  amount?: Amount17;
  amountAdjustments?: AmountAdjustment[];
  arn?: string;
  bookingDate?: Date;
  estimatedArrivalTime?: Date;
  eventsData?: EventsDatum[];
  externalReason?: ExternalReason1;
  id?: string;
  modification?: Modification2;
  mutations?: BalanceMutation[];
  originalAmount?: Amount17;
  reason?: Reason1;
  status?: Status24;
  tracingData?: TracingData;
  trackingData?: TrackingData;
  transactionId?: string;
  type?: Type73;
  updateDate?: Date;
  valueDate?: Date;
};

export const transferEventSchema: Schema<TransferEvent> = s.object<TransferEvent>({
  amount: s.optional(s.lazy(() => amount17Schema)),
  amountAdjustments: s.optional(s.array(s.lazy(() => amountAdjustmentSchema))),
  arn: s.optional(s.string()),
  bookingDate: s.optional(s.dateTime()),
  estimatedArrivalTime: s.optional(s.dateTime()),
  eventsData: s.optional(s.array(s.lazy(() => eventsDatumSchema))),
  externalReason: s.optional(s.lazy(() => externalReason1Schema)),
  id: s.optional(s.string()),
  modification: s.optional(s.lazy(() => modification2Schema)),
  mutations: s.optional(s.array(s.lazy(() => balanceMutationSchema))),
  originalAmount: s.optional(s.lazy(() => amount17Schema)),
  reason: s.optional(s.lazy(() => reason1Schema)),
  status: s.optional(s.lazy(() => status24Schema)),
  tracingData: s.optional(s.lazy(() => tracingDataSchema)),
  trackingData: s.optional(s.lazy(() => trackingDataSchema)),
  transactionId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type73Schema)),
  updateDate: s.optional(s.dateTime()),
  valueDate: s.optional(s.dateTime()),
});
