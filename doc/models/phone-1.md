
# Phone 1

The phone number where the one-time password (OTP) is sent.

This object must have:

* A `type` set to **mobile**.

* A `number` with a valid country code.

* A `number` with more than 4 digits, excluding the country code.

> Make sure to verify that the card user owns the phone number.

*This model accepts additional fields of type unknown.*

## Structure

`Phone1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | The full phone number provided as a single string.<br>For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**,<br><br>or **"(0031) 611223344"**. |
| `type` | [`Type4`](../../doc/models/type-4.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Phone1, Type4 } from 'adyenlib';

const phone1: Phone1 = {
  number: 'number0',
  type: Type4.Landline,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

