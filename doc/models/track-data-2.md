
# Track Data 2

*This model accepts additional fields of type unknown.*

## Structure

`TrackData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trackNumb` | `number \| undefined` | Optional | Card track number.<br><br>**Default**: `2`<br><br>**Constraints**: `>= 1`, `<= 3` |
| `trackFormat` | [`TrackFormat1 \| undefined`](../../doc/models/track-format-1.md) | Optional | - |
| `trackValue` | `string` | Required | Card track content.<br><br>**Constraints**: *Pattern*: `^.{1,104}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TrackData2, TrackFormat1 } from 'adyen';

const trackData2: TrackData2 = {
  trackValue: 'TrackValue0',
  trackNumb: 2,
  trackFormat: TrackFormat1.Iso,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

