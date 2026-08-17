
# Sensitive Mobile Data

## Structure

`SensitiveMobileData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mSISDN` | `number` | Required | Mobile Subscriber Integrated Service Digital Network (i.e. mobile phone number of the SIM card). Country, National Destination Code, and Subscriber Number. |
| `iMSI` | `number \| undefined` | Optional | International Mobile Subscriber Identity. Unique number associated with the mobile phone user, containing the Mobile Country Code (MCC), the Mobile Network Code (MNC), and the Mobile Identification Number (MSIN) |
| `iMEI` | `number \| undefined` | Optional | International Mobile Equipment Identity. Unique number associated with the mobile phone device. |

## Example

```ts
import { SensitiveMobileData } from 'adyen';

const sensitiveMobileData: SensitiveMobileData = {
  mSISDN: 66,
  iMSI: 42,
  iMEI: 206,
};
```

