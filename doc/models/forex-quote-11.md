
# Forex Quote 11

The forex quote as returned in the response of the forex service.

## Structure

`ForexQuote11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string \| undefined` | Optional | The account name. |
| `accountType` | `string \| undefined` | Optional | The account type. |
| `baseAmount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The base amount. |
| `basePoints` | `number` | Required | The base points. |
| `buy` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The buy rate. |
| `interbank` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The interbank amount. |
| `reference` | `string \| undefined` | Optional | The reference assigned to the forex quote request. |
| `sell` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The sell rate. |
| `signature` | `string \| undefined` | Optional | The signature to validate the integrity. |
| `source` | `string \| undefined` | Optional | The source of the forex quote. |
| `type` | `string \| undefined` | Optional | The type of forex. |
| `validTill` | `string` | Required | The date until which the forex quote is valid. |

## Example

```ts
import { ForexQuote11 } from 'adyen';

const forexQuote11: ForexQuote11 = {
  basePoints: 184,
  validTill: '2016-03-13T12:52:32.123Z',
  account: 'account4',
  accountType: 'accountType4',
  baseAmount: {
    currency: 'currency8',
    value: BigInt(202),
  },
  buy: {
    currency: 'currency2',
    value: BigInt(72),
  },
  interbank: {
    currency: 'currency4',
    value: BigInt(244),
  },
};
```

