
# Target Update

*This model accepts additional fields of type unknown.*

## Structure

`TargetUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the `target.type`. This can be the ID of your:<br><br>* balance platform<br>* account holder<br>* account holder's balance account<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | [`Type18 \| undefined`](../../doc/models/type-18.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TargetUpdate, Type18 } from 'adyenlib';

const targetUpdate: TargetUpdate = {
  id: 'id0',
  type: Type18.BalanceAccount,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

