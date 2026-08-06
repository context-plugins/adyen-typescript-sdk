
# Permit Restriction

*This model accepts additional fields of type unknown.*

## Structure

`PermitRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maxAmount` | [`MaxAmount3 \| undefined`](../../doc/models/max-amount-3.md) | Optional | - |
| `singleTransactionLimit` | [`SingleTransactionLimit \| undefined`](../../doc/models/single-transaction-limit.md) | Optional | - |
| `singleUse` | `boolean \| undefined` | Optional | Only a single payment can be made using this permit if set to true, otherwise multiple payments are allowed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PermitRestriction } from 'adyen';

const permitRestriction: PermitRestriction = {
  maxAmount: {
    currency: 'currency4',
    value: BigInt(160),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  singleTransactionLimit: {
    currency: 'currency8',
    value: BigInt(122),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  singleUse: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

