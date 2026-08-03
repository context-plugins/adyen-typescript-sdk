
# Processing Types Restriction

*This model accepts additional fields of type unknown.*

## Structure

`ProcessingTypesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value4[] \| undefined`](../../doc/models/value-4.md) | Optional | List of processing types.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ProcessingTypesRestriction, Value4 } from 'adyenlib';

const processingTypesRestriction: ProcessingTypesRestriction = {
  operation: 'operation6',
  value: [
    Value4.Pos,
    Value4.Recurring
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

