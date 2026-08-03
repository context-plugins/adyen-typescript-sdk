
# Sensitive Card Data 2

*This model accepts additional fields of type unknown.*

## Structure

`SensitiveCardData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pan` | `number \| undefined` | Optional | Primary Account Number.<br><br>**Constraints**: `>= 8`, `<= 28` |
| `cardSeqNumb` | `number \| undefined` | Optional | Card Sequence Number.<br>If EntryMode is File, Keyed, or Manual.<br><br>**Constraints**: `>= 2`, `<= 3` |
| `expiryDate` | `number \| undefined` | Optional | Date after which the card cannot be used.<br>If EntryMode is File.<br><br>**Constraints**: `>= 4`, `<= 4` |
| `trackData` | [`TrackData[] \| undefined`](../../doc/models/track-data.md) | Optional | Magnetic track or magnetic ink characters line.<br>If EntryMode is MagStripe or RFID . |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SensitiveCardData2, TrackFormat1 } from 'adyenlib';

const sensitiveCardData2: SensitiveCardData2 = {
  pan: 14,
  cardSeqNumb: 3,
  expiryDate: 4,
  trackData: [
    {
      trackValue: 'TrackValue6',
      trackNumb: 3,
      trackFormat: TrackFormat1.Jisii,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      trackValue: 'TrackValue6',
      trackNumb: 3,
      trackFormat: TrackFormat1.Jisii,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      trackValue: 'TrackValue6',
      trackNumb: 3,
      trackFormat: TrackFormat1.Jisii,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

