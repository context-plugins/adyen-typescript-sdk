
# Split Dcc 2

Defines the logic for booking the markup paid by the customer for Dynamic Currency Conversion (DCC).

> This field is in pilot phase, and not yet available for all platforms.

## Structure

`SplitDcc2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderPercentage` | `bigint \| undefined` | Optional | - |

## Example

```ts
import { SplitDcc2 } from 'adyen';

const splitDcc2: SplitDcc2 = {
  accountHolderPercentage: BigInt(198),
};
```

