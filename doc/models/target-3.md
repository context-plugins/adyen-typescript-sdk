
# Target 3

The resource about whose balance change you want to get notified.

*This model accepts additional fields of type unknown.*

## Structure

`Target3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the `target.type`. This can be the ID of your:<br><br>* balance platform<br>* account holder<br>* account holder's balance account<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | [`Type18`](../../doc/models/type-18.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Target3, Type18 } from 'adyen';

const target3: Target3 = {
  id: 'id4',
  type: Type18.BalancePlatform,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

