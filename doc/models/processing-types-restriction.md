
# Processing Types Restriction

## Structure

`ProcessingTypesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value4Enum[] \| undefined`](../../doc/models/value-4-enum.md) | Optional | List of processing types.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**. |

## Example

```ts
import { ProcessingTypesRestriction, Value4Enum } from 'adyen';

const processingTypesRestriction: ProcessingTypesRestriction = {
  operation: 'operation6',
  value: [
    Value4Enum.Pos,
    Value4Enum.Recurring
  ],
};
```

