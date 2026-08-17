
# Target 3

The resource about whose balance change you want to get notified.

## Structure

`Target3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the `target.type`. This can be the ID of your:<br><br>* balance platform<br>* account holder<br>* account holder's balance account<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | [`Type181Enum`](../../doc/models/type-181-enum.md) | Required | The resource for which you want to receive notifications. Possible values:<br><br>* **balancePlatform**: receive notifications about balance changes in your entire balance platform.<br><br>* **accountHolder**: receive notifications about balance changes of a specific user.<br><br>* **balanceAccount**: receive notifications about balance changes in a specific balance account. |

## Example

```ts
import { Target3, Type181Enum } from 'adyen';

const target3: Target3 = {
  id: 'id4',
  type: Type181Enum.BalancePlatform,
};
```

