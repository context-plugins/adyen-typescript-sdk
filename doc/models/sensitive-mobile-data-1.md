
# Sensitive Mobile Data 1

Sensitive information related to the mobile phone.
If unprotected mobile data.

*This model accepts additional fields of type unknown.*

## Structure

`SensitiveMobileData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `msisdn` | `number` | Required | Mobile Subscriber Integrated Service Digital Network (i.e. mobile phone number of the SIM card). Country, National Destination Code, and Subscriber Number. |
| `imsi` | `number \| undefined` | Optional | International Mobile Subscriber Identity. Unique number associated with the mobile phone user, containing the Mobile Country Code (MCC), the Mobile Network Code (MNC), and the Mobile Identification Number (MSIN) |
| `imei` | `number \| undefined` | Optional | International Mobile Equipment Identity. Unique number associated with the mobile phone device. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SensitiveMobileData1 } from 'adyenlib';

const sensitiveMobileData1: SensitiveMobileData1 = {
  msisdn: 112,
  imsi: 88,
  imei: 252,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

