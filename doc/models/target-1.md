
# Target 1

The type and ID of the resource about whose balance changes you want to be notified.

## Structure

`Target1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the `target.type`. This can be the ID of your:<br><br>* balance platform<br>* account holder<br>* account holder's balance account<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | [`Type181Enum`](../../doc/models/type-181-enum.md) | Required | The resource for which you want to receive notifications. Possible values:<br><br>* **balancePlatform**: receive notifications about balance changes in your entire balance platform.<br><br>* **accountHolder**: receive notifications about balance changes of a specific user.<br><br>* **balanceAccount**: receive notifications about balance changes in a specific balance account. |

## Example

```ts
import { Target1, Type181Enum } from 'adyen';

const target1: Target1 = {
  id: 'id8',
  type: Type181Enum.AccountHolder,
};
```

