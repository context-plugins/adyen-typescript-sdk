
# Phone Number 3

*This model accepts additional fields of type unknown.*

## Structure

`PhoneNumber3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneCountryCode` | `string \| undefined` | Optional | The two-character country code of the phone number.<br><br>> The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL'). |
| `phoneNumber` | `string \| undefined` | Optional | The phone number.<br><br>> The inclusion of the phone number country code is not necessary. |
| `phoneType` | [`PhoneType \| undefined`](../../doc/models/phone-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PhoneNumber3, PhoneType } from 'adyenlib';

const phoneNumber3: PhoneNumber3 = {
  phoneCountryCode: 'phoneCountryCode8',
  phoneNumber: 'phoneNumber0',
  phoneType: PhoneType.Mobile,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

