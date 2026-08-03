
# Utm Coordinates

*This model accepts additional fields of type unknown.*

## Structure

`UtmCoordinates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `utmZone` | `string` | Required | UTM grid zone combination of the longitude zone (1 to 60) and the latitude band (C to X, excluding I and O).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `utmEastward` | `string` | Required | X-coordinate of the Universal Transverse Mercator coordinate system.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `utmNorthward` | `string` | Required | Y-coordinate of the Universal Transverse Mercator coordinate system.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UtmCoordinates } from 'adyenlib';

const utmCoordinates: UtmCoordinates = {
  utmZone: 'UTMZone0',
  utmEastward: 'UTMEastward6',
  utmNorthward: 'UTMNorthward6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

