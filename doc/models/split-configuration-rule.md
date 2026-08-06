
# Split Configuration Rule

*This model accepts additional fields of type unknown.*

## Structure

`SplitConfigurationRule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardRegion` | [`CardRegion \| undefined`](../../doc/models/card-region.md) | Optional | - |
| `currency` | `string` | Required | The currency condition that defines whether the split logic applies.<br>Its value must be a three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217). |
| `fundingSource` | [`FundingSource1`](../../doc/models/funding-source-1.md) | Required | - |
| `paymentMethod` | `string` | Required | The payment method condition that defines whether the split logic applies.<br><br>Possible values:<br><br>* [Payment method variant](https://docs.adyen.com/development-resources/paymentmethodvariant): Apply the split logic for a specific payment method.<br>* **ANY**: Apply the split logic for all available payment methods. |
| `ruleId` | `string \| undefined` | Optional, Read-only | The unique identifier of the split configuration rule. |
| `shopperInteraction` | [`ShopperInteraction11`](../../doc/models/shopper-interaction-11.md) | Required | - |
| `splitLogic` | [`SplitConfigurationLogic`](../../doc/models/split-configuration-logic.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AcquiringFees,
  AdyenCommission,
  AdyenFees,
  AdyenMarkup,
  CardRegion,
  FundingSource1,
  ShopperInteraction11,
  SplitConfigurationRule,
} from 'adyen';

const splitConfigurationRule: SplitConfigurationRule = {
  currency: 'currency6',
  fundingSource: FundingSource1.Prepaid,
  paymentMethod: 'paymentMethod6',
  shopperInteraction: ShopperInteraction11.Moto,
  splitLogic: {
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
  },
  cardRegion: CardRegion.International,
  ruleId: 'ruleId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

