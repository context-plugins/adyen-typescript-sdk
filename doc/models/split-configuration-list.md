
# Split Configuration List

## Structure

`SplitConfigurationList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`SplitConfiguration[] \| undefined`](../../doc/models/split-configuration.md) | Optional | List of split configurations applied to the stores under the merchant account. |

## Example

```ts
import {
  AcquiringFeesEnum,
  AdyenCommissionEnum,
  AdyenFeesEnum,
  AdyenMarkupEnum,
  CardRegionEnum,
  FundingSource1Enum,
  ShopperInteraction11Enum,
  SplitConfigurationList,
} from 'adyen';

const splitConfigurationList: SplitConfigurationList = {
  data: [
    {
      description: 'description0',
      rules: [
        {
          currency: 'currency2',
          fundingSource: FundingSource1Enum.Prepaid,
          paymentMethod: 'paymentMethod4',
          shopperInteraction: ShopperInteraction11Enum.ANY,
          splitLogic: {
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
          },
          cardRegion: CardRegionEnum.International,
        },
        {
          currency: 'currency2',
          fundingSource: FundingSource1Enum.Prepaid,
          paymentMethod: 'paymentMethod4',
          shopperInteraction: ShopperInteraction11Enum.ANY,
          splitLogic: {
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
          },
          cardRegion: CardRegionEnum.International,
        }
      ],
    }
  ],
};
```

