
# Phone 31

The phone number of the account holder.

## Structure

`Phone31`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | The full phone number provided as a single string.<br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**,<br><br>or **"(0031) 611223344"**. |
| `type` | [`Type410Enum`](../../doc/models/type-410-enum.md) | Required | Type of phone number.<br>Possible values:<br>**Landline**, **Mobile**. |

## Example

```ts
import { Phone31, Type410Enum } from 'adyen';

const phone31: Phone31 = {
  number: 'number2',
  type: Type410Enum.Landline,
};
```

