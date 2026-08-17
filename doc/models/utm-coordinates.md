
# UTM Coordinates

## Structure

`UTMCoordinates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uTMZone` | `string` | Required | UTM grid zone combination of the longitude zone (1 to 60) and the latitude band (C to X, excluding I and O).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `uTMEastward` | `string` | Required | X-coordinate of the Universal Transverse Mercator coordinate system.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `uTMNorthward` | `string` | Required | Y-coordinate of the Universal Transverse Mercator coordinate system.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { UTMCoordinates } from 'adyen';

const uTMCoordinates: UTMCoordinates = {
  uTMZone: 'UTMZone2',
  uTMEastward: 'UTMEastward4',
  uTMNorthward: 'UTMNorthward4',
};
```

