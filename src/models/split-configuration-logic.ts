import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acquiringFeesSchema, type AcquiringFees } from "./acquiring-fees.js";
import { additionalCommission1Schema, type AdditionalCommission1 } from "./additional-commission1.js";
import { adyenCommissionSchema, type AdyenCommission } from "./adyen-commission.js";
import { adyenFeesSchema, type AdyenFees } from "./adyen-fees.js";
import { adyenMarkupSchema, type AdyenMarkup } from "./adyen-markup.js";
import { behaviorSchema, type Behavior } from "./behavior.js";
import {
  chargebackCostAllocationSchema,
  type ChargebackCostAllocation,
} from "./chargeback-cost-allocation.js";
import { commission1Schema, type Commission1 } from "./commission1.js";
import { interchangeSchema, type Interchange } from "./interchange.js";
import { paymentFeeSchema, type PaymentFee } from "./payment-fee.js";
import { refundCostAllocationSchema, type RefundCostAllocation } from "./refund-cost-allocation.js";
import { remainderSchema, type Remainder } from "./remainder.js";
import { schemeFeeSchema, type SchemeFee } from "./scheme-fee.js";
import { splitDcc2Schema, type SplitDcc2 } from "./split-dcc2.js";
import { surcharge3Schema, type Surcharge3 } from "./surcharge3.js";
import { tipSchema, type Tip } from "./tip.js";

export type SplitConfigurationLogic = {
  acquiringFees?: AcquiringFees;
  additionalCommission?: AdditionalCommission1;
  adyenCommission?: AdyenCommission;
  adyenFees?: AdyenFees;
  adyenMarkup?: AdyenMarkup;
  chargeback?: Behavior;
  chargebackCostAllocation?: ChargebackCostAllocation;
  commission: Commission1;
  dcc?: SplitDcc2;
  interchange?: Interchange;
  paymentFee?: PaymentFee;
  refund?: Behavior;
  refundCostAllocation?: RefundCostAllocation;
  remainder?: Remainder;
  schemeFee?: SchemeFee;
  splitLogicId?: string;
  surcharge?: Surcharge3;
  tip?: Tip;
};

export const splitConfigurationLogicSchema: Schema<SplitConfigurationLogic> =
  s.object<SplitConfigurationLogic>({
    acquiringFees: s.optional(s.lazy(() => acquiringFeesSchema)),
    additionalCommission: s.optional(s.lazy(() => additionalCommission1Schema)),
    adyenCommission: s.optional(s.lazy(() => adyenCommissionSchema)),
    adyenFees: s.optional(s.lazy(() => adyenFeesSchema)),
    adyenMarkup: s.optional(s.lazy(() => adyenMarkupSchema)),
    chargeback: s.optional(s.lazy(() => behaviorSchema)),
    chargebackCostAllocation: s.optional(s.lazy(() => chargebackCostAllocationSchema)),
    commission: commission1Schema,
    dcc: s.optional(s.lazy(() => splitDcc2Schema)),
    interchange: s.optional(s.lazy(() => interchangeSchema)),
    paymentFee: s.optional(s.lazy(() => paymentFeeSchema)),
    refund: s.optional(s.lazy(() => behaviorSchema)),
    refundCostAllocation: s.optional(s.lazy(() => refundCostAllocationSchema)),
    remainder: s.optional(s.lazy(() => remainderSchema)),
    schemeFee: s.optional(s.lazy(() => schemeFeeSchema)),
    splitLogicId: s.optional(s.string()),
    surcharge: s.optional(s.lazy(() => surcharge3Schema)),
    tip: s.optional(s.lazy(() => tipSchema)),
  });
