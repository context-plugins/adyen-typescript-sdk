
# Account Detail Balance

*This model accepts additional fields of type unknown.*

## Structure

`AccountDetailBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The code of the account that holds the balance. |
| `detailBalance` | [`DetailBalance \| undefined`](../../doc/models/detail-balance.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountDetailBalance } from 'adyenlib';

const accountDetailBalance: AccountDetailBalance = {
  accountCode: 'accountCode6',
  detailBalance: {
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

