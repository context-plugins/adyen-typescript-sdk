
# Track Data 1

Magnetic track or magnetic ink characters line.
Mandatory if CheckNumber absent.

## Structure

`TrackData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trackNumb` | `number \| undefined` | Optional | Card track number.<br><br>**Default**: `2`<br><br>**Constraints**: `>= 1`, `<= 3` |
| `trackFormat` | [`TrackFormat1Enum \| undefined`](../../doc/models/track-format-1-enum.md) | Optional | Card track format.<br>Possible values:<br><br>* **AAMVA**<br>* **ISO** |
| `trackValue` | `string` | Required | Card track content.<br><br>**Constraints**: *Pattern*: `^.{1,104}$` |

## Example

```ts
import { TrackData1, TrackFormat1Enum } from 'adyen';

const trackData1: TrackData1 = {
  trackValue: 'TrackValue2',
  trackNumb: 2,
  trackFormat: TrackFormat1Enum.JISII,
};
```

