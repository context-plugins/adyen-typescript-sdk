
# Processing Types Restriction 1

List of processing types and the operation.

Supported operations: **anyMatch**, **noneMatch**.

## Structure

`ProcessingTypesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value4Enum[] \| undefined`](../../doc/models/value-4-enum.md) | Optional | List of processing types.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**. |

## Example

```ts
import { ProcessingTypesRestriction1, Value4Enum } from 'adyen';

const processingTypesRestriction1: ProcessingTypesRestriction1 = {
  operation: 'operation2',
  value: [
    Value4Enum.Ecommerce,
    Value4Enum.Moto
  ],
};
```

