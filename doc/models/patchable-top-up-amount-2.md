
# Patchable Top Up Amount 2

The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.

## Structure

`PatchableTopUpAmount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`PatchableTopUpAmount2Fixed \| null \| undefined`](../../doc/models/containers/patchable-top-up-amount-2-fixed.md) | Optional | This is a container for one-of cases. |
| `target` | [`PatchableTopUpAmount2Target \| null \| undefined`](../../doc/models/containers/patchable-top-up-amount-2-target.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import { PatchableTopUpAmount2 } from 'adyen';

const patchableTopUpAmount2: PatchableTopUpAmount2 = {
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

