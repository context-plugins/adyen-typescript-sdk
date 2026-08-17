
# Capability Settings 1

A JSON object containing the settings that were requested for the account holder.

## Structure

`CapabilitySettings1`

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
import { CapabilitySettings1, FundingSourceEnum, IntervalEnum } from 'adyen';

const capabilitySettings1: CapabilitySettings1 = {
  amountPerIndustry: {
    'key0': {
      currency: 'currency8',
      value: BigInt(56),
    }
  },
  authorizedCardUsers: false,
  fundingSource: [
    FundingSourceEnum.Credit,
    FundingSourceEnum.Debit,
    FundingSourceEnum.Prepaid
  ],
  interval: IntervalEnum.Monthly,
  maxAmount: {
    currency: 'currency4',
    value: BigInt(160),
  },
};
```

