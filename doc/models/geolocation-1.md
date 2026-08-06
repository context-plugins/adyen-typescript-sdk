
# Geolocation 1

Geographic location specified by geographic or UTM coordinates.
If data available.

*This model accepts additional fields of type unknown.*

## Structure

`Geolocation1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `geographicCoordinates` | [`GeographicCoordinates \| undefined`](../../doc/models/geographic-coordinates.md) | Optional | - |
| `utmCoordinates` | [`UtmCoordinates \| undefined`](../../doc/models/utm-coordinates.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Geolocation1 } from 'adyen';

const geolocation1: Geolocation1 = {
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
};
```

