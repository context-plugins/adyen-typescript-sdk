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
  /**
   * The original journal amount. Only applicable for [issuing](https://docs.adyen.com/issuing/)
   * integrations.
   */
  amount?: Amount17;
  /**
   * The amount adjustments in this transfer. Only applicable for
   * [issuing](https://docs.adyen.com/issuing/) integrations.
   */
  amountAdjustments?: AmountAdjustment[];
  /** Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc. */
  arn?: string;
  /** The date when the transfer request was sent. */
  bookingDate?: Date;
  /** The estimated time when the beneficiary should have access to the funds. */
  estimatedArrivalTime?: Date;
  /** A list of event data. */
  eventsData?: EventsDatum[];
  /** The external reason for the transfer status. */
  externalReason?: ExternalReason1;
  /** The unique identifier of the transfer event. */
  id?: string;
  /**
   * The payment modification. Only applicable for [returned internal
   * transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer).
   */
  modification?: Modification2;
  /** The list of balance mutations per event. */
  mutations?: BalanceMutation[];
  /**
   * The amount in the original currency. Only applicable for
   * [issuing](https://docs.adyen.com/issuing/) integrations.
   */
  originalAmount?: Amount17;
  /** The reason for the transfer status. */
  reason?: Reason1;
  /** The status of the transfer event. */
  status?: Status24;
  /** Additional tracing information for the tracing event. */
  tracingData?: TracingData;
  /** Additional information for the tracking event. */
  trackingData?: TrackingData;
  /**
   * The id of the transaction that is related to this accounting event. Only sent for events of
   * type **accounting** where the balance changes.
   */
  transactionId?: string;
  /** The type of the transfer event. Possible values: **accounting**, **tracking**. */
  type?: Type73;
  /** The date when the tracking status was updated. */
  updateDate?: Date;
  /**
   * The date when the funds are expected to be deducted from or credited to the balance account.
   * This date can be in either the past or future.
   */
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
