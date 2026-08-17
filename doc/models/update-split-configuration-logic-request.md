
# Update Split Configuration Logic Request

## Structure

`UpdateSplitConfigurationLogicRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquiringFees` | [`AcquiringFeesEnum \| undefined`](../../doc/models/acquiring-fees-enum.md) | Optional | Deducts the acquiring fees (the aggregated amount of interchange and scheme fee) from the specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**. |
| `additionalCommission` | [`AdditionalCommission1 \| undefined`](../../doc/models/additional-commission-1.md) | Optional | Defines whether to book an additional commission for payments to your user's balance account. The commission amount can be defined as a fixed amount (specified in minor units), a percentage (specified in basis points), or both. |
| `adyenCommission` | [`AdyenCommissionEnum \| undefined`](../../doc/models/adyen-commission-enum.md) | Optional | Deducts the transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing) from the specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**. |
| `adyenFees` | [`AdyenFeesEnum \| undefined`](../../doc/models/adyen-fees-enum.md) | Optional | Deducts the fees due to Adyen (markup or commission) from the specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**. |
| `adyenMarkup` | [`AdyenMarkupEnum \| undefined`](../../doc/models/adyen-markup-enum.md) | Optional | Deducts the transaction fee due to Adyen under [Interchange ++ pricing](https://www.adyen.com/what-is-interchange) from the specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**. |
| `chargeback` | [`BehaviorEnum \| undefined`](../../doc/models/behavior-enum.md) | Optional | Specifies how and from which balance account(s) to deduct the chargeback amount.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**. |
| `chargebackCostAllocation` | [`ChargebackCostAllocationEnum \| undefined`](../../doc/models/chargeback-cost-allocation-enum.md) | Optional | Deducts the chargeback costs from the specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount** |
| `commission` | [`Commission1`](../../doc/models/commission-1.md) | Required | Defines your platform's commission for the processed payments as a fixed amount (specified in minor units), a percentage (specified in basis points), or both. The commission is booked to your platform's liable balance account. |
| `dcc` | [`SplitDcc2 \| undefined`](../../doc/models/split-dcc-2.md) | Optional | Defines the logic for booking the markup paid by the customer for Dynamic Currency Conversion (DCC).<br><br>> This field is in pilot phase, and not yet available for all platforms. |
| `interchange` | [`InterchangeEnum \| undefined`](../../doc/models/interchange-enum.md) | Optional | Deducts the interchange fee from specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**. |
| `paymentFee` | [`PaymentFeeEnum \| undefined`](../../doc/models/payment-fee-enum.md) | Optional | Deducts all transaction fees incurred by the payment from the specified balance account. The transaction fees include the acquiring fees (interchange and scheme fee), and the fees due to Adyen (markup or commission). You can book any and all these fees to different balance account by specifying other transaction fee parameters in your split configuration profile:<br><br>- [`adyenCommission`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenCommission): The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended).<br>- [`adyenMarkup`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenMarkup): The transaction fee due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended).<br>- [`schemeFee`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-schemeFee): The fee paid to the card scheme for using their network.<br>- [`interchange`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-interchange): The fee paid to the issuer for each payment transaction made with the card network.<br>- [`adyenFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenFees): The aggregated amount of Adyen's commission and markup.<br>- [`acquiringFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-acquiringFees): The aggregated amount of the interchange and scheme fees.<br><br>If you don't include at least one transaction fee type in the `splitLogic` object, Adyen updates the payment request with the `paymentFee` parameter, booking all transaction fees to your platform's liable balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**. |
| `refund` | [`BehaviorEnum \| undefined`](../../doc/models/behavior-enum.md) | Optional | Specifies how and from which balance account(s) to deduct the refund amount.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio** |
| `refundCostAllocation` | [`RefundCostAllocationEnum \| undefined`](../../doc/models/refund-cost-allocation-enum.md) | Optional | Deducts the refund costs from the specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount** |
| `remainder` | [`RemainderEnum \| undefined`](../../doc/models/remainder-enum.md) | Optional | Books the amount left over after currency conversion to the specified balance account.<br><br>Possible values: **addToLiableAccount**, **addToOneBalanceAccount**. |
| `schemeFee` | [`SchemeFeeEnum \| undefined`](../../doc/models/scheme-fee-enum.md) | Optional | Deducts the scheme fee from the specified balance account.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**. |
| `splitLogicId` | `string \| undefined` | Optional, Read-only | Unique identifier of the collection of split instructions that are applied when the rule conditions are met. |
| `surcharge` | [`Surcharge3Enum \| undefined`](../../doc/models/surcharge-3-enum.md) | Optional | Books the surcharge amount to the specified balance account.<br><br>Possible values: **addToLiableAccount**, **addToOneBalanceAccount** |
| `tip` | [`TipEnum \| undefined`](../../doc/models/tip-enum.md) | Optional | Books the tips (gratuity) to the specified balance account.<br><br>Possible values: **addToLiableAccount**, **addToOneBalanceAccount**. |

## Example

```ts
import {
  AcquiringFeesEnum,
  AdyenCommissionEnum,
  AdyenFeesEnum,
  AdyenMarkupEnum,
  UpdateSplitConfigurationLogicRequest,
} from 'adyen';

const updateSplitConfigurationLogicRequest: UpdateSplitConfigurationLogicRequest = {
  commission: {
    fixedAmount: BigInt(112),
    variablePercentage: BigInt(52),
  },
  acquiringFees: AcquiringFeesEnum.DeductFromLiableAccount,
  additionalCommission: {
    balanceAccountId: 'balanceAccountId0',
    fixedAmount: BigInt(100),
    variablePercentage: BigInt(64),
  },
  adyenCommission: AdyenCommissionEnum.DeductFromLiableAccount,
  adyenFees: AdyenFeesEnum.DeductFromLiableAccount,
  adyenMarkup: AdyenMarkupEnum.DeductFromLiableAccount,
};
```

