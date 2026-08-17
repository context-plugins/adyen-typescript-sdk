
# Mobile Data

Mobile phone is used as a payment instrument for the transaction.
Information related to the mobile for the payment transaction.

## Structure

`MobileData`

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
import { MobileData } from 'adyen';

const mobileData: MobileData = {
  mobileCountryCode: 3,
  mobileNetworkCode: 3,
  maskedMSISDN: 0,
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

