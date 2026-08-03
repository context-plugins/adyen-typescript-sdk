
# Bank Category Data

*This model accepts additional fields of type unknown.*

## Structure

`BankCategoryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `priority` | [`Priority \| undefined`](../../doc/models/priority.md) | Optional | - |
| `type` | [`Type312 \| undefined`](../../doc/models/type-312.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankCategoryData, Priority, Type312 } from 'adyenlib';

const bankCategoryData: BankCategoryData = {
  priority: Priority.Instant,
  type: Type312.Bank,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

