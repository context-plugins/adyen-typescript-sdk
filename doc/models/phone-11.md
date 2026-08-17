
# Phone 11

The phone number where the one-time password (OTP) is sent.

This object must have:

* A `type` set to **mobile**.

* A `number` with a valid country code.

* A `number` with more than 4 digits, excluding the country code.

> Make sure to verify that the card user owns the phone number.

## Structure

`Phone11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | The full phone number provided as a single string.<br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**,<br><br>or **"(0031) 611223344"**. |
| `type` | [`Type410Enum`](../../doc/models/type-410-enum.md) | Required | Type of phone number.<br>Possible values:<br>**Landline**, **Mobile**. |

## Example

```ts
import { Phone11, Type410Enum } from 'adyen';

const phone11: Phone11 = {
  number: 'number0',
  type: Type410Enum.Landline,
};
```

