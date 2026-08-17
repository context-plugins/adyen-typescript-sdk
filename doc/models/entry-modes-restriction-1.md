
# Entry Modes Restriction 1

List of point-of-sale entry modes and the operation..

Supported operations: **anyMatch**, **noneMatch**.

## Structure

`EntryModesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value2Enum[] \| undefined`](../../doc/models/value-2-enum.md) | Optional | List of point-of-sale entry modes.<br><br>Possible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**. |

## Example

```ts
import { EntryModesRestriction1, Value2Enum } from 'adyen';

const entryModesRestriction1: EntryModesRestriction1 = {
  operation: 'operation4',
  value: [
    Value2Enum.Magstripe,
    Value2Enum.Manual,
    Value2Enum.Ocr
  ],
};
```

