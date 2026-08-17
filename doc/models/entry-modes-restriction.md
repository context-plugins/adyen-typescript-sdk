
# Entry Modes Restriction

## Structure

`EntryModesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value2Enum[] \| undefined`](../../doc/models/value-2-enum.md) | Optional | List of point-of-sale entry modes.<br><br>Possible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**. |

## Example

```ts
import { EntryModesRestriction, Value2Enum } from 'adyen';

const entryModesRestriction: EntryModesRestriction = {
  operation: 'operation4',
  value: [
    Value2Enum.Magstripe,
    Value2Enum.Manual,
    Value2Enum.Ocr
  ],
};
```

