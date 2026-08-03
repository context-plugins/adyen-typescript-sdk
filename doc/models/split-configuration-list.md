
# Split Configuration List

*This model accepts additional fields of type unknown.*

## Structure

`SplitConfigurationList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`SplitConfiguration[] \| undefined`](../../doc/models/split-configuration.md) | Optional | List of split configurations applied to the stores under the merchant account. |
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
  SplitConfigurationList,
} from 'adyenlib';

const splitConfigurationList: SplitConfigurationList = {
  data: [
    {
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
        },
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
      splitConfigurationId: 'splitConfigurationId6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

