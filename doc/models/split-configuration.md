
# Split Configuration

## Structure

`SplitConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Your description for the split configuration.<br><br>**Constraints**: *Maximum Length*: `300` |
| `rules` | [`SplitConfigurationRule[]`](../../doc/models/split-configuration-rule.md) | Required | Array of rules that define the split configuration behavior. |
| `splitConfigurationId` | `string \| undefined` | Optional, Read-only | Unique identifier of the split configuration. |

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
  SplitConfiguration,
} from 'adyen';

const splitConfiguration: SplitConfiguration = {
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
    }
  ],
};
```

