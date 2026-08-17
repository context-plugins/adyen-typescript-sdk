
# Capability Settings 11

The settings that are allowed for the legal entity.

## Structure

`CapabilitySettings11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountPerIndustry` | [`Record<string, PatchableAmountDTO> \| undefined`](../../doc/models/patchable-amount-dto.md) | Optional | The maximum amount a card holder can spend per industry. |
| `authorizedCardUsers` | `boolean \| undefined` | Optional | The number of card holders who can use the card. |
| `fundingSource` | [`FundingSourceEnum[] \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source of the card, for example **debit**. |
| `interval` | [`IntervalEnum \| undefined`](../../doc/models/interval-enum.md) | Optional | The period when the rule conditions apply. |
| `maxAmount` | [`PatchableAmountDTO \| undefined`](../../doc/models/patchable-amount-dto.md) | Optional | The maximum amount a card holder can withdraw per day. |

## Example

```ts
import { CapabilitySettings11, FundingSourceEnum, IntervalEnum } from 'adyen';

const capabilitySettings11: CapabilitySettings11 = {
  amountPerIndustry: {
    'key0': {
      currency: 'currency8',
      value: BigInt(56),
    },
    'key1': {
      currency: 'currency8',
      value: BigInt(56),
    },
    'key2': {
      currency: 'currency8',
      value: BigInt(56),
    }
  },
  authorizedCardUsers: false,
  fundingSource: [
    FundingSourceEnum.Debit,
    FundingSourceEnum.Credit
  ],
  interval: IntervalEnum.Daily,
  maxAmount: {
    currency: 'currency4',
    value: BigInt(160),
  },
};
```

