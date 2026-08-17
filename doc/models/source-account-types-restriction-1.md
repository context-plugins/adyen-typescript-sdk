
# Source Account Types Restriction 1

Contains a list of source account types and how they must be evaluated.

Supported operations: **anyMatch**, **noneMatch**.

Supported value inputs:

- **balanceAccount**
- **businessAccount**.

## Structure

`SourceAccountTypesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value5Enum[] \| undefined`](../../doc/models/value-5-enum.md) | Optional | The list of source account types to be evaluated. |

## Example

```ts
import { SourceAccountTypesRestriction1, Value5Enum } from 'adyen';

const sourceAccountTypesRestriction1: SourceAccountTypesRestriction1 = {
  operation: 'operation6',
  value: [
    Value5Enum.BalanceAccount,
    Value5Enum.BusinessAccount
  ],
};
```

