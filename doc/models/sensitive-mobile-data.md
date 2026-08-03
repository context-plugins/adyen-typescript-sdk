
# Sensitive Mobile Data

*This model accepts additional fields of type unknown.*

## Structure

`SensitiveMobileData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `msisdn` | `number` | Required | Mobile Subscriber Integrated Service Digital Network (i.e. mobile phone number of the SIM card). Country, National Destination Code, and Subscriber Number. |
| `imsi` | `number \| undefined` | Optional | International Mobile Subscriber Identity. Unique number associated with the mobile phone user, containing the Mobile Country Code (MCC), the Mobile Network Code (MNC), and the Mobile Identification Number (MSIN) |
| `imei` | `number \| undefined` | Optional | International Mobile Equipment Identity. Unique number associated with the mobile phone device. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SensitiveMobileData } from 'adyenlib';

const sensitiveMobileData: SensitiveMobileData = {
  msisdn: 66,
  imsi: 42,
  imei: 206,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

