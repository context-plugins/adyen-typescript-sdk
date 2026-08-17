
# Mobile Data 1

Information related to the mobile for the payment transaction.
If PaymentInstrumentType is Mobile.

## Structure

`MobileData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mobileCountryCode` | `number \| undefined` | Optional | Identifies the country of a mobile phone operator.<br>If data available.<br><br>**Constraints**: `>= 3`, `<= 3` |
| `mobileNetworkCode` | `number \| undefined` | Optional | Identifies the mobile phone operator inside a country.<br>If data available.<br><br>**Constraints**: `>= 2`, `<= 3` |
| `maskedMSISDN` | `number \| undefined` | Optional | Masked Mobile Subscriber Integrated Service Digital Network.<br>If data available. |
| `geolocation` | [`Geolocation1 \| undefined`](../../doc/models/geolocation-1.md) | Optional | Geographic location specified by geographic or UTM coordinates.<br>If data available. |
| `protectedMobileData` | `string \| undefined` | Optional | Sensitive information related to the mobile phone, protected by CMS.<br>SensitiveMobileData. |
| `sensitiveMobileData` | [`SensitiveMobileData1 \| undefined`](../../doc/models/sensitive-mobile-data-1.md) | Optional | Sensitive information related to the mobile phone.<br>If unprotected mobile data. |

## Example

```ts
import { MobileData1 } from 'adyen';

const mobileData1: MobileData1 = {
  mobileCountryCode: 3,
  mobileNetworkCode: 3,
  maskedMSISDN: 220,
  geolocation: {
    geographicCoordinates: {
      latitude: 'Latitude4',
      longitude: 'Longitude2',
    },
    uTMCoordinates: {
      uTMZone: 'UTMZone6',
      uTMEastward: 'UTMEastward0',
      uTMNorthward: 'UTMNorthward0',
    },
  },
  protectedMobileData: 'ProtectedMobileData8',
};
```

