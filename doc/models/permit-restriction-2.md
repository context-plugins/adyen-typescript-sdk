
# Permit Restriction 2

Permit level restriction overrides.

## Structure

`PermitRestriction2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maxAmount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The total sum amount of one or more payments made using this permit may not exceed this amount if set. |
| `singleTransactionLimit` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The amount of any single payment using this permit may not exceed this amount if set. |
| `singleUse` | `boolean \| undefined` | Optional | Only a single payment can be made using this permit if set to true, otherwise multiple payments are allowed. |

## Example

```ts
import { PermitRestriction2 } from 'adyen';

const permitRestriction2: PermitRestriction2 = {
  maxAmount: {
    currency: 'currency4',
    value: BigInt(160),
  },
  singleTransactionLimit: {
    currency: 'currency8',
    value: BigInt(122),
  },
  singleUse: false,
};
```

