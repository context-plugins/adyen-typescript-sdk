
# Forex Quote 2

The forex quote as returned in the response of the forex service.

*This model accepts additional fields of type unknown.*

## Structure

`ForexQuote2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string \| undefined` | Optional | The account name. |
| `accountType` | `string \| undefined` | Optional | The account type. |
| `baseAmount` | [`BaseAmount \| undefined`](../../doc/models/base-amount.md) | Optional | - |
| `basePoints` | `number` | Required | The base points. |
| `buy` | [`Buy \| undefined`](../../doc/models/buy.md) | Optional | - |
| `interbank` | [`Interbank \| undefined`](../../doc/models/interbank.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | The reference assigned to the forex quote request. |
| `sell` | [`Sell \| undefined`](../../doc/models/sell.md) | Optional | - |
| `signature` | `string \| undefined` | Optional | The signature to validate the integrity. |
| `source` | `string \| undefined` | Optional | The source of the forex quote. |
| `type` | `string \| undefined` | Optional | The type of forex. |
| `validTill` | `string` | Required | The date until which the forex quote is valid. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ForexQuote2 } from 'adyen';

const forexQuote2: ForexQuote2 = {
  basePoints: 8,
  validTill: '2016-03-13T12:52:32.123Z',
  account: 'account0',
  accountType: 'accountType0',
  baseAmount: {
    currency: 'currency8',
    value: BigInt(202),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  buy: {
    currency: 'currency2',
    value: BigInt(72),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  interbank: {
    currency: 'currency4',
    value: BigInt(244),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

