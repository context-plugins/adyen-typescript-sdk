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

/** Contains the split logic that is applied if the rule conditions are met. */
export type SplitConfigurationLogic2 = {
  /**
   * Deducts the acquiring fees (the aggregated amount of interchange and scheme fee) from the
   * specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
   */
  acquiringFees?: AcquiringFees;
  /**
   * Defines whether to book an additional commission for payments to your user's balance account.
   * The commission amount can be defined as a fixed amount (specified in minor units), a percentage
   * (specified in basis points), or both.
   */
  additionalCommission?: AdditionalCommission1;
  /**
   * Deducts the transaction fee due to Adyen under [blended
   * rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing)
   * from the specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
   */
  adyenCommission?: AdyenCommission;
  /**
   * Deducts the fees due to Adyen (markup or commission) from the specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
   */
  adyenFees?: AdyenFees;
  /**
   * Deducts the transaction fee due to Adyen under [Interchange ++
   * pricing](https://www.adyen.com/what-is-interchange) from the specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
   */
  adyenMarkup?: AdyenMarkup;
  /**
   * Specifies how and from which balance account(s) to deduct the chargeback amount.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**,
   * **deductAccordingToSplitRatio**.
   */
  chargeback?: Behavior;
  /**
   * Deducts the chargeback costs from the specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
   */
  chargebackCostAllocation?: ChargebackCostAllocation;
  /**
   * Defines your platform's commission for the processed payments as a fixed amount (specified in
   * minor units), a percentage (specified in basis points), or both. The commission is booked to
   * your platform's liable balance account.
   */
  commission: Commission1;
  /**
   * Defines the logic for booking the markup paid by the customer for Dynamic Currency Conversion
   * (DCC).
   *
   * > This field is in pilot phase, and not yet available for all platforms.
   */
  dcc?: SplitDcc2;
  /**
   * Deducts the interchange fee from specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
   */
  interchange?: Interchange;
  /**
   * Deducts all transaction fees incurred by the payment from the specified balance account. The
   * transaction fees include the acquiring fees (interchange and scheme fee), and the fees due to
   * Adyen (markup or commission). You can book any and all these fees to different balance account
   * by specifying other transaction fee parameters in your split configuration profile:
   *
   * -
   *   [`adyenCommission`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenCommission):
   *   The transaction fee due to Adyen under [blended
   *   rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended).
   * -
   *   [`adyenMarkup`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenMarkup):
   *   The transaction fee due to Adyen under [Interchange ++
   *   pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended).
   * -
   *   [`schemeFee`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-schemeFee):
   *   The fee paid to the card scheme for using their network.
   * -
   *   [`interchange`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-interchange):
   *   The fee paid to the issuer for each payment transaction made with the card network.
   * -
   *   [`adyenFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenFees):
   *   The aggregated amount of Adyen's commission and markup.
   * -
   *   [`acquiringFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-acquiringFees):
   *   The aggregated amount of the interchange and scheme fees.
   *
   * If you don't include at least one transaction fee type in the `splitLogic` object, Adyen
   * updates the payment request with the `paymentFee` parameter, booking all transaction fees to
   * your platform's liable balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
   */
  paymentFee?: PaymentFee;
  /**
   * Specifies how and from which balance account(s) to deduct the refund amount.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**,
   * **deductAccordingToSplitRatio**
   */
  refund?: Behavior;
  /**
   * Deducts the refund costs from the specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
   */
  refundCostAllocation?: RefundCostAllocation;
  /**
   * Books the amount left over after currency conversion to the specified balance account.
   *
   * Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
   */
  remainder?: Remainder;
  /**
   * Deducts the scheme fee from the specified balance account.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
   */
  schemeFee?: SchemeFee;
  /**
   * Unique identifier of the collection of split instructions that are applied when the rule
   * conditions are met.
   */
  splitLogicId?: string;
  /**
   * Books the surcharge amount to the specified balance account.
   *
   * Possible values: **addToLiableAccount**, **addToOneBalanceAccount**
   */
  surcharge?: Surcharge3;
  /**
   * Books the tips (gratuity) to the specified balance account.
   *
   * Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
   */
  tip?: Tip;
};

export const splitConfigurationLogic2Schema: Schema<SplitConfigurationLogic2> =
  s.object<SplitConfigurationLogic2>({
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
