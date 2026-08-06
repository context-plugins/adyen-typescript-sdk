
# Vias Phone Number 1

The phone number of the person.

*This model accepts additional fields of type unknown.*

## Structure

`ViasPhoneNumber1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneCountryCode` | `string \| undefined` | Optional | The two-character country code of the phone number.<br><br>> The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL'). |
| `phoneNumber` | `string \| undefined` | Optional | The phone number.<br><br>> The inclusion of the phone number country code is not necessary. |
| `phoneType` | [`PhoneType \| undefined`](../../doc/models/phone-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PhoneType, ViasPhoneNumber1 } from 'adyen';

const viasPhoneNumber1: ViasPhoneNumber1 = {
  phoneCountryCode: 'phoneCountryCode6',
  phoneNumber: 'phoneNumber8',
  phoneType: PhoneType.Fax,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

