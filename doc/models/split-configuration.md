
# Split Configuration

*This model accepts additional fields of type unknown.*

## Structure

`SplitConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Your description for the split configuration.<br><br>**Constraints**: *Maximum Length*: `300` |
| `rules` | [`SplitConfigurationRule[]`](../../doc/models/split-configuration-rule.md) | Required | Array of rules that define the split configuration behavior. |
| `splitConfigurationId` | `string \| undefined` | Optional, Read-only | Unique identifier of the split configuration. |
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
  SplitConfiguration,
} from 'adyenlib';

const splitConfiguration: SplitConfiguration = {
  description: 'description0',
  rules: [
    {
      currency: 'currency2',
      fundingSource: FundingSource1.Prepaid,
      paymentMethod: 'paymentMethod4',
      shopperInteraction: ShopperInteraction11.Any,
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
      ruleId: 'ruleId2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  splitConfigurationId: 'splitConfigurationId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

