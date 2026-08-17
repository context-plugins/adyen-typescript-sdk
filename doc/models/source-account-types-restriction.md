
# Source Account Types Restriction

## Structure

`SourceAccountTypesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value5Enum[] \| undefined`](../../doc/models/value-5-enum.md) | Optional | The list of source account types to be evaluated. |

## Example

```ts
import { SourceAccountTypesRestriction, Value5Enum } from 'adyen';

const sourceAccountTypesRestriction: SourceAccountTypesRestriction = {
  operation: 'operation0',
  value: [
    Value5Enum.BalanceAccount
  ],
};
```

