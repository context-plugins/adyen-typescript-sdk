
# Patchable Top Up Amount

## Structure

`PatchableTopUpAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`PatchableTopUpAmountFixed \| null \| undefined`](../../doc/models/containers/patchable-top-up-amount-fixed.md) | Optional | This is a container for one-of cases. |
| `target` | [`PatchableTopUpAmountTarget \| null \| undefined`](../../doc/models/containers/patchable-top-up-amount-target.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import { PatchableTopUpAmount } from 'adyen';

const patchableTopUpAmount: PatchableTopUpAmount = {
  fixed: {
    currency: 'currency2',
    value: BigInt(164),
  },
  target: {
    currency: 'currency2',
    value: BigInt(164),
  },
};
```

