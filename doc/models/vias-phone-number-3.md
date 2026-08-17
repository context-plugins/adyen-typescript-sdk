
# Vias Phone Number 3

The phone number of the account holder.

> Required if a `fullPhoneNumber` is not provided.

## Structure

`ViasPhoneNumber3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneCountryCode` | `string \| undefined` | Optional | The two-character country code of the phone number.<br><br>> The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL'). |
| `phoneNumber` | `string \| undefined` | Optional | The phone number.<br><br>> The inclusion of the phone number country code is not necessary. |
| `phoneType` | [`PhoneTypeEnum \| undefined`](../../doc/models/phone-type-enum.md) | Optional | The type of the phone number.<br><br>> The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`. |

## Example

```ts
import { PhoneTypeEnum, ViasPhoneNumber3 } from 'adyen';

const viasPhoneNumber3: ViasPhoneNumber3 = {
  phoneCountryCode: 'phoneCountryCode2',
  phoneNumber: 'phoneNumber4',
  phoneType: PhoneTypeEnum.Mobile,
};
```

