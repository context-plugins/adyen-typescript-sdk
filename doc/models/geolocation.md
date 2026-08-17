
# Geolocation

## Structure

`Geolocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `geographicCoordinates` | [`GeographicCoordinates \| undefined`](../../doc/models/geographic-coordinates.md) | Optional | - |
| `uTMCoordinates` | [`UTMCoordinates \| undefined`](../../doc/models/utm-coordinates.md) | Optional | - |

## Example

```ts
import { Geolocation } from 'adyen';

const geolocation: Geolocation = {
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

