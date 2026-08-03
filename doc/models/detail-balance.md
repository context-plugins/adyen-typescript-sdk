
# Detail Balance

*This model accepts additional fields of type unknown.*

## Structure

`DetailBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balance` | [`Amount2[] \| undefined`](../../doc/models/amount-2.md) | Optional | The list of balances held by the account. |
| `onHoldBalance` | [`Amount2[] \| undefined`](../../doc/models/amount-2.md) | Optional | The list of on hold balances held by the account. |
| `pendingBalance` | [`Amount2[] \| undefined`](../../doc/models/amount-2.md) | Optional | The list of pending balances held by the account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DetailBalance } from 'adyenlib';

const detailBalance: DetailBalance = {
  balance: [
    {
      currency: 'currency4',
      value: BigInt(128),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      currency: 'currency4',
      value: BigInt(128),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  onHoldBalance: [
    {
      currency: 'currency8',
      value: BigInt(72),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      currency: 'currency8',
      value: BigInt(72),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      currency: 'currency8',
      value: BigInt(72),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  pendingBalance: [
    {
      currency: 'currency2',
      value: BigInt(254),
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

