
# Phone Number 1

The support phone number of the legal entity. Required if you have a platform setup.

## Structure

`PhoneNumber1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | The full phone number, including the country code. For example, **+3112345678**. |
| `phoneCountryCode` | `string \| undefined` | Optional, Read-only | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code prefix of the phone number. For example, **US** or **NL**.<br><br>The value of the `phoneCountryCode` is determined by the country code digit(s) of `phone.number` |
| `type` | `string \| undefined` | Optional | The type of phone number.<br>Possible values: **mobile**, **landline**, **sip**, **fax.** |

## Example

```ts
import { PhoneNumber1 } from 'adyen';

const phoneNumber1: PhoneNumber1 = {
  number: 'number0',
  type: 'type8',
};
```

