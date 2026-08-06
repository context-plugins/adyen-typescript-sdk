
# Source Account Types Restriction

*This model accepts additional fields of type unknown.*

## Structure

`SourceAccountTypesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value5[] \| undefined`](../../doc/models/value-5.md) | Optional | The list of source account types to be evaluated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SourceAccountTypesRestriction, Value5 } from 'adyen';

const sourceAccountTypesRestriction: SourceAccountTypesRestriction = {
  operation: 'operation0',
  value: [
    Value5.BalanceAccount
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

