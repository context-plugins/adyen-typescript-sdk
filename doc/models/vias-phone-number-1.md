
# Vias Phone Number 1

The phone number of the person.

## Structure

`ViasPhoneNumber1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneCountryCode` | `string \| undefined` | Optional | The two-character country code of the phone number.<br><br>> The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL'). |
| `phoneNumber` | `string \| undefined` | Optional | The phone number.<br><br>> The inclusion of the phone number country code is not necessary. |
| `phoneType` | [`PhoneTypeEnum \| undefined`](../../doc/models/phone-type-enum.md) | Optional | The type of the phone number.<br><br>> The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`. |

## Example

```ts
import { PhoneTypeEnum, ViasPhoneNumber1 } from 'adyen';

const viasPhoneNumber1: ViasPhoneNumber1 = {
  phoneCountryCode: 'phoneCountryCode6',
  phoneNumber: 'phoneNumber8',
  phoneType: PhoneTypeEnum.Fax,
};
```

