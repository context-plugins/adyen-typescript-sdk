
# Authentication 1

Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.

*This model accepts additional fields of type unknown.*

## Structure

`Authentication1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | The email address where the one-time password (OTP) is sent. |
| `password` | `string \| undefined` | Optional | The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.<br><br>* Characters between **a-z**, **A-Z**, and **0-9**<br><br>* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#'",;:$&àùòâôûáúó**<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30` |
| `phone` | [`Phone \| undefined`](../../doc/models/phone.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Authentication1, Type4 } from 'adyen';

const authentication1: Authentication1 = {
  email: 'email6',
  password: 'password4',
  phone: {
    number: 'number8',
    type: Type4.Landline,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

