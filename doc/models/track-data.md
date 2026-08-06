
# Track Data

Magnetic track or magnetic ink characters line.
ISO 7813 - ISO 4909.
Generic data structure for a card track, used when the magstripe card reader is located on the Sale Terminal, or for magstripe Card Reader device request. The data structure is also used to store the line at the bottom of a bank check.

*This model accepts additional fields of type unknown.*

## Structure

`TrackData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trackNumb` | `number \| undefined` | Optional | Card track number.<br><br>**Default**: `2`<br><br>**Constraints**: `>= 1`, `<= 3` |
| `trackFormat` | [`TrackFormat1 \| undefined`](../../doc/models/track-format-1.md) | Optional | - |
| `trackValue` | `string` | Required | Card track content.<br><br>**Constraints**: *Pattern*: `^.{1,104}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TrackData, TrackFormat1 } from 'adyen';

const trackData: TrackData = {
  trackValue: 'TrackValue0',
  trackNumb: 2,
  trackFormat: TrackFormat1.Jisii,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

