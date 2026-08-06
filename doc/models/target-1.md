
# Target 1

The type and ID of the resource about whose balance changes you want to be notified.

*This model accepts additional fields of type unknown.*

## Structure

`Target1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the `target.type`. This can be the ID of your:<br><br>* balance platform<br>* account holder<br>* account holder's balance account<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | [`Type18`](../../doc/models/type-18.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Target1, Type18 } from 'adyen';

const target1: Target1 = {
  id: 'id8',
  type: Type18.AccountHolder,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

