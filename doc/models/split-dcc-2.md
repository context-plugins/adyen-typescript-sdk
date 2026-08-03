
# Split Dcc 2

Defines the logic for booking the markup paid by the customer for Dynamic Currency Conversion (DCC).

> This field is in pilot phase, and not yet available for all platforms.

*This model accepts additional fields of type unknown.*

## Structure

`SplitDcc2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderPercentage` | `bigint \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SplitDcc2 } from 'adyenlib';

const splitDcc2: SplitDcc2 = {
  accountHolderPercentage: BigInt(198),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

