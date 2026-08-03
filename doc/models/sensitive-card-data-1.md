
# Sensitive Card Data 1

Sensitive information related to the payment card, entered or read by the Sale System.
If structure non empty and unprotected.

*This model accepts additional fields of type unknown.*

## Structure

`SensitiveCardData1`

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
import { SensitiveCardData1, TrackFormat1 } from 'adyenlib';

const sensitiveCardData1: SensitiveCardData1 = {
  pan: 28,
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

