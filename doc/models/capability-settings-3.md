
# Capability Settings 3

A JSON object containing the settings that are allowed for the account holder.

*This model accepts additional fields of type unknown.*

## Structure

`CapabilitySettings3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountPerIndustry` | [`Record<string, Amount3> \| undefined`](../../doc/models/amount-3.md) | Optional | - |
| `authorizedCardUsers` | `boolean \| undefined` | Optional | - |
| `fundingSource` | [`FundingSource[] \| undefined`](../../doc/models/funding-source.md) | Optional | - |
| `interval` | [`Interval \| undefined`](../../doc/models/interval.md) | Optional | The period when the rule conditions apply. |
| `maxAmount` | [`Amount3 \| undefined`](../../doc/models/amount-3.md) | Optional | The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapabilitySettings3, FundingSource, Interval } from 'adyen';

const capabilitySettings3: CapabilitySettings3 = {
  amountPerIndustry: {
    'key0': {
      currency: 'currency8',
      value: BigInt(56),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    'key1': {
      currency: 'currency8',
      value: BigInt(56),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  },
  authorizedCardUsers: false,
  fundingSource: [
    FundingSource.Debit
  ],
  interval: Interval.Weekly,
  maxAmount: {
    currency: 'currency4',
    value: BigInt(160),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

