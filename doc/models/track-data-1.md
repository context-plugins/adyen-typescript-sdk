
# Track Data 1

Magnetic track or magnetic ink characters line.
Mandatory if CheckNumber absent.

*This model accepts additional fields of type unknown.*

## Structure

`TrackData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trackNumb` | `number \| undefined` | Optional | Card track number.<br><br>**Default**: `2`<br><br>**Constraints**: `>= 1`, `<= 3` |
| `trackFormat` | [`TrackFormat1 \| undefined`](../../doc/models/track-format-1.md) | Optional | - |
| `trackValue` | `string` | Required | Card track content.<br><br>**Constraints**: *Pattern*: `^.{1,104}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TrackData1, TrackFormat1 } from 'adyen';

const trackData1: TrackData1 = {
  trackValue: 'TrackValue2',
  trackNumb: 2,
  trackFormat: TrackFormat1.Jisii,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

