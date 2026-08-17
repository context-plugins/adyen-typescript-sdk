
# Phone 4

## Structure

`Phone4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | The full phone number provided as a single string.<br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**,<br><br>or **"(0031) 611223344"**. |
| `type` | [`Type410Enum`](../../doc/models/type-410-enum.md) | Required | Type of phone number.<br>Possible values:<br>**Landline**, **Mobile**. |

## Example

```ts
import { Phone4, Type410Enum } from 'adyen';

const phone4: Phone4 = {
  number: 'number4',
  type: Type410Enum.Landline,
};
```

