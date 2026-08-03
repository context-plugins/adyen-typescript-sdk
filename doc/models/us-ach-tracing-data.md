
# Us Ach Tracing Data

*This model accepts additional fields of type unknown.*

## Structure

`UsAchTracingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `traceNumber` | `string` | Required | The ACH trace number. This is a unique 15-digit identifier assigned to transfers processed by [ACH](https://fiscal.treasury.gov/payments-from-government/automated-clearing-house-ach). |
| `type` | [`Type89`](../../doc/models/type-89.md) | Required | **usAch** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type89, UsAchTracingData } from 'adyenlib';

const usAchTracingData: UsAchTracingData = {
  traceNumber: 'traceNumber4',
  type: Type89.UsAch,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

