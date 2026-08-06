
# Processing Types Restriction 1

List of processing types and the operation.

Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`ProcessingTypesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value4[] \| undefined`](../../doc/models/value-4.md) | Optional | List of processing types.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ProcessingTypesRestriction1, Value4 } from 'adyen';

const processingTypesRestriction1: ProcessingTypesRestriction1 = {
  operation: 'operation2',
  value: [
    Value4.Ecommerce,
    Value4.Moto
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

