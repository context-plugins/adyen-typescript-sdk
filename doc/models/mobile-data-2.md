
# Mobile Data 2

*This model accepts additional fields of type unknown.*

## Structure

`MobileData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mobileCountryCode` | `number \| undefined` | Optional | Identifies the country of a mobile phone operator.<br>If data available.<br><br>**Constraints**: `>= 3`, `<= 3` |
| `mobileNetworkCode` | `number \| undefined` | Optional | Identifies the mobile phone operator inside a country.<br>If data available.<br><br>**Constraints**: `>= 2`, `<= 3` |
| `maskedMsisdn` | `number \| undefined` | Optional | Masked Mobile Subscriber Integrated Service Digital Network.<br>If data available. |
| `geolocation` | [`Geolocation \| undefined`](../../doc/models/geolocation.md) | Optional | - |
| `protectedMobileData` | `string \| undefined` | Optional | Sensitive information related to the mobile phone, protected by CMS.<br>SensitiveMobileData. |
| `sensitiveMobileData` | [`SensitiveMobileData \| undefined`](../../doc/models/sensitive-mobile-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MobileData2 } from 'adyen';

const mobileData2: MobileData2 = {
  mobileCountryCode: 3,
  mobileNetworkCode: 3,
  maskedMsisdn: 46,
  geolocation: {
    geographicCoordinates: {
      latitude: 'Latitude4',
      longitude: 'Longitude2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    utmCoordinates: {
      utmZone: 'UTMZone6',
      utmEastward: 'UTMEastward0',
      utmNorthward: 'UTMNorthward0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  protectedMobileData: 'ProtectedMobileData0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

