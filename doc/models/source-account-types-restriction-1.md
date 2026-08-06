
# Source Account Types Restriction 1

Contains a list of source account types and how they must be evaluated.

Supported operations: **anyMatch**, **noneMatch**.

Supported value inputs:

- **balanceAccount**
- **businessAccount**.

*This model accepts additional fields of type unknown.*

## Structure

`SourceAccountTypesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value5[] \| undefined`](../../doc/models/value-5.md) | Optional | The list of source account types to be evaluated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SourceAccountTypesRestriction1, Value5 } from 'adyen';

const sourceAccountTypesRestriction1: SourceAccountTypesRestriction1 = {
  operation: 'operation6',
  value: [
    Value5.BalanceAccount,
    Value5.BusinessAccount
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

