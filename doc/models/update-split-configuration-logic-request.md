
# Update Split Configuration Logic Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateSplitConfigurationLogicRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquiringFees` | [`AcquiringFees \| undefined`](../../doc/models/acquiring-fees.md) | Optional | - |
| `additionalCommission` | [`AdditionalCommission \| undefined`](../../doc/models/additional-commission.md) | Optional | - |
| `adyenCommission` | [`AdyenCommission \| undefined`](../../doc/models/adyen-commission.md) | Optional | - |
| `adyenFees` | [`AdyenFees \| undefined`](../../doc/models/adyen-fees.md) | Optional | - |
| `adyenMarkup` | [`AdyenMarkup \| undefined`](../../doc/models/adyen-markup.md) | Optional | - |
| `chargeback` | [`Behavior \| undefined`](../../doc/models/behavior.md) | Optional | - |
| `chargebackCostAllocation` | [`ChargebackCostAllocation \| undefined`](../../doc/models/chargeback-cost-allocation.md) | Optional | - |
| `commission` | [`Commission`](../../doc/models/commission.md) | Required | - |
| `dcc` | [`SplitDcc \| undefined`](../../doc/models/split-dcc.md) | Optional | - |
| `interchange` | [`Interchange \| undefined`](../../doc/models/interchange.md) | Optional | - |
| `paymentFee` | [`PaymentFee \| undefined`](../../doc/models/payment-fee.md) | Optional | - |
| `refund` | [`Behavior \| undefined`](../../doc/models/behavior.md) | Optional | - |
| `refundCostAllocation` | [`RefundCostAllocation \| undefined`](../../doc/models/refund-cost-allocation.md) | Optional | - |
| `remainder` | [`Remainder \| undefined`](../../doc/models/remainder.md) | Optional | - |
| `schemeFee` | [`SchemeFee \| undefined`](../../doc/models/scheme-fee.md) | Optional | - |
| `splitLogicId` | `string \| undefined` | Optional, Read-only | Unique identifier of the collection of split instructions that are applied when the rule conditions are met. |
| `surcharge` | [`Surcharge3 \| undefined`](../../doc/models/surcharge-3.md) | Optional | - |
| `tip` | [`Tip \| undefined`](../../doc/models/tip.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AcquiringFees,
  AdyenCommission,
  AdyenFees,
  AdyenMarkup,
  UpdateSplitConfigurationLogicRequest,
} from 'adyen';

const updateSplitConfigurationLogicRequest: UpdateSplitConfigurationLogicRequest = {
  commission: {
    fixedAmount: BigInt(112),
    variablePercentage: BigInt(52),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  acquiringFees: AcquiringFees.DeductFromLiableAccount,
  additionalCommission: {
    balanceAccountId: 'balanceAccountId0',
    fixedAmount: BigInt(100),
    variablePercentage: BigInt(64),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  adyenCommission: AdyenCommission.DeductFromLiableAccount,
  adyenFees: AdyenFees.DeductFromLiableAccount,
  adyenMarkup: AdyenMarkup.DeductFromLiableAccount,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

