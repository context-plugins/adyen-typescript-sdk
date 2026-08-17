
# Sensitive Card Data 1

Sensitive information related to the payment card, entered or read by the Sale System.
If structure non empty and unprotected.

## Structure

`SensitiveCardData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pAN` | `number \| undefined` | Optional | Primary Account Number.<br><br>**Constraints**: `>= 8`, `<= 28` |
| `cardSeqNumb` | `number \| undefined` | Optional | Card Sequence Number.<br>If EntryMode is File, Keyed, or Manual.<br><br>**Constraints**: `>= 2`, `<= 3` |
| `expiryDate` | `number \| undefined` | Optional | Date after which the card cannot be used.<br>If EntryMode is File.<br><br>**Constraints**: `>= 4`, `<= 4` |
| `trackData` | [`TrackData[] \| undefined`](../../doc/models/track-data.md) | Optional | Magnetic track or magnetic ink characters line.<br>If EntryMode is MagStripe or RFID . |

## Example

```ts
import { SensitiveCardData1, TrackFormat1Enum } from 'adyen';

const sensitiveCardData1: SensitiveCardData1 = {
  pAN: 28,
  cardSeqNumb: 3,
  expiryDate: 4,
  trackData: [
    {
      trackValue: 'TrackValue6',
      trackNumb: 3,
      trackFormat: TrackFormat1Enum.JISII,
    },
    {
      trackValue: 'TrackValue6',
      trackNumb: 3,
      trackFormat: TrackFormat1Enum.JISII,
    },
    {
      trackValue: 'TrackValue6',
      trackNumb: 3,
      trackFormat: TrackFormat1Enum.JISII,
    }
  ],
};
```

