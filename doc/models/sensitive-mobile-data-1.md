
# Sensitive Mobile Data 1

Sensitive information related to the mobile phone.
If unprotected mobile data.

## Structure

`SensitiveMobileData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mSISDN` | `number` | Required | Mobile Subscriber Integrated Service Digital Network (i.e. mobile phone number of the SIM card). Country, National Destination Code, and Subscriber Number. |
| `iMSI` | `number \| undefined` | Optional | International Mobile Subscriber Identity. Unique number associated with the mobile phone user, containing the Mobile Country Code (MCC), the Mobile Network Code (MNC), and the Mobile Identification Number (MSIN) |
| `iMEI` | `number \| undefined` | Optional | International Mobile Equipment Identity. Unique number associated with the mobile phone device. |

## Example

```ts
import { SensitiveMobileData1 } from 'adyen';

const sensitiveMobileData1: SensitiveMobileData1 = {
  mSISDN: 112,
  iMSI: 88,
  iMEI: 252,
};
```

