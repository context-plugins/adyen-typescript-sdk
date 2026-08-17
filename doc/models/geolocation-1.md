
# Geolocation 1

Geographic location specified by geographic or UTM coordinates.
If data available.

## Structure

`Geolocation1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `geographicCoordinates` | [`GeographicCoordinates \| undefined`](../../doc/models/geographic-coordinates.md) | Optional | - |
| `uTMCoordinates` | [`UTMCoordinates \| undefined`](../../doc/models/utm-coordinates.md) | Optional | - |

## Example

```ts
import { Geolocation1 } from 'adyen';

const geolocation1: Geolocation1 = {
  geographicCoordinates: {
    latitude: 'Latitude4',
    longitude: 'Longitude2',
  },
  uTMCoordinates: {
    uTMZone: 'UTMZone6',
    uTMEastward: 'UTMEastward0',
    uTMNorthward: 'UTMNorthward0',
  },
};
```

