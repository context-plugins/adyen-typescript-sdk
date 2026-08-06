
# Amount Non Zero Decimals Requirement

*This model accepts additional fields of type unknown.*

## Structure

`AmountNonZeroDecimalsRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies for which routes the amount in a transfer request must have no non-zero decimal places, so the transfer can only be processed if the amount consists of round numbers. |
| `type` | [`Type94`](../../doc/models/type-94.md) | Required | **amountNonZeroDecimalsRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmountNonZeroDecimalsRequirement, Type94 } from 'adyen';

const amountNonZeroDecimalsRequirement: AmountNonZeroDecimalsRequirement = {
  type: Type94.AmountNonZeroDecimalsRequirement,
  description: 'description4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

