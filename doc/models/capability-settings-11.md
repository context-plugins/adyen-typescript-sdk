
# Capability Settings 11

The settings that are allowed for the legal entity.

*This model accepts additional fields of type unknown.*

## Structure

`CapabilitySettings11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountPerIndustry` | [`Record<string, PatchableAmountDto> \| undefined`](../../doc/models/patchable-amount-dto.md) | Optional | The maximum amount a card holder can spend per industry. |
| `authorizedCardUsers` | `boolean \| undefined` | Optional | The number of card holders who can use the card. |
| `fundingSource` | [`FundingSource[] \| undefined`](../../doc/models/funding-source.md) | Optional | The funding source of the card, for example **debit**. |
| `interval` | [`Interval \| undefined`](../../doc/models/interval.md) | Optional | - |
| `maxAmount` | [`MaxAmount \| undefined`](../../doc/models/max-amount.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapabilitySettings11, FundingSource, Interval } from 'adyenlib';

const capabilitySettings11: CapabilitySettings11 = {
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
    },
    'key2': {
      currency: 'currency8',
      value: BigInt(56),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  },
  authorizedCardUsers: false,
  fundingSource: [
    FundingSource.Debit,
    FundingSource.Credit
  ],
  interval: Interval.Daily,
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

