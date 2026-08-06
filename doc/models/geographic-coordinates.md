
# Geographic Coordinates

*This model accepts additional fields of type unknown.*

## Structure

`GeographicCoordinates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `string` | Required | Angular distance of a location on the earth south or north of the equator.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `longitude` | `string` | Required | Angular measurement of the distance of a location on the earth east or west of the Greenwich observatory.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GeographicCoordinates } from 'adyen';

const geographicCoordinates: GeographicCoordinates = {
  latitude: 'Latitude6',
  longitude: 'Longitude4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

