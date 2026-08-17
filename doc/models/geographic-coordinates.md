
# Geographic Coordinates

## Structure

`GeographicCoordinates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `string` | Required | Angular distance of a location on the earth south or north of the equator.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `longitude` | `string` | Required | Angular measurement of the distance of a location on the earth east or west of the Greenwich observatory.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { GeographicCoordinates } from 'adyen';

const geographicCoordinates: GeographicCoordinates = {
  latitude: 'Latitude6',
  longitude: 'Longitude4',
};
```

