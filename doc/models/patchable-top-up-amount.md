
# Patchable Top Up Amount

*This model accepts additional fields of type unknown.*

## Structure

`PatchableTopUpAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`PatchableTopUpAmountFixed \| undefined`](../../doc/models/containers/patchable-top-up-amount-fixed.md) | Optional | This is a container for one-of cases. |
| `target` | [`PatchableTopUpAmountTarget \| undefined`](../../doc/models/containers/patchable-top-up-amount-target.md) | Optional | This is a container for one-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableTopUpAmount } from 'adyen';

const patchableTopUpAmount: PatchableTopUpAmount = {
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

