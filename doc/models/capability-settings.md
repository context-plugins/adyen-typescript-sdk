
# Capability Settings

## Structure

`CapabilitySettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountPerIndustry` | [`Record<string, Amount17> \| undefined`](../../doc/models/amount-17.md) | Optional | - |
| `authorizedCardUsers` | `boolean \| undefined` | Optional | - |
| `fundingSource` | [`FundingSourceEnum[] \| undefined`](../../doc/models/funding-source-enum.md) | Optional | - |
| `interval` | [`IntervalEnum \| undefined`](../../doc/models/interval-enum.md) | Optional | - |
| `maxAmount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | - |

## Example

```ts
import { CapabilitySettings, FundingSourceEnum, IntervalEnum } from 'adyen';

const capabilitySettings: CapabilitySettings = {
  amountPerIndustry: {
    'key0': {
      currency: 'currency8',
      value: BigInt(56),
    },
    'key1': {
      currency: 'currency8',
      value: BigInt(56),
    }
  },
  authorizedCardUsers: false,
  fundingSource: [
    FundingSourceEnum.Debit
  ],
  interval: IntervalEnum.Weekly,
  maxAmount: {
    currency: 'currency4',
    value: BigInt(160),
  },
};
```

