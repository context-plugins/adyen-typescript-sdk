
# Split Dcc

*This model accepts additional fields of type unknown.*

## Structure

`SplitDcc`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderPercentage` | `bigint \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SplitDcc } from 'adyen';

const splitDcc: SplitDcc = {
  accountHolderPercentage: BigInt(140),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

