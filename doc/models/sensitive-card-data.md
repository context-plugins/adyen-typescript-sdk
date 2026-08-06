
# Sensitive Card Data

This data structure could be CMS protected (EnvelopedData). In this case the data structure SensitiveCardData is replaced by the data structure ProtectedCardData of type ContentInformationType.
When this data is protected, the exact content is unknown by the Sale System, and might include
all the information which are required by an external backup POI Server to make a batch payment
transaction in case of problem with the POI System.
Sensitive information related to the payment card, entered or read
by the Sale System.

*This model accepts additional fields of type unknown.*

## Structure

`SensitiveCardData`

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
import { SensitiveCardData, TrackFormat1 } from 'adyen';

const sensitiveCardData: SensitiveCardData = {
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

