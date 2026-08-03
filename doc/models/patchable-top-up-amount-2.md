
# Patchable Top Up Amount 2

The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.

*This model accepts additional fields of type unknown.*

## Structure

`PatchableTopUpAmount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`PatchableTopUpAmount2Fixed \| undefined`](../../doc/models/containers/patchable-top-up-amount-2-fixed.md) | Optional | This is a container for one-of cases. |
| `target` | [`PatchableTopUpAmount2Target \| undefined`](../../doc/models/containers/patchable-top-up-amount-2-target.md) | Optional | This is a container for one-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableTopUpAmount2 } from 'adyenlib';

const patchableTopUpAmount2: PatchableTopUpAmount2 = {
  fixed: {
    currency: 'currency2',
    value: BigInt(164),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  target: {
    currency: 'currency2',
    value: BigInt(164),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

