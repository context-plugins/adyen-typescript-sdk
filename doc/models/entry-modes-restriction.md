
# Entry Modes Restriction

*This model accepts additional fields of type unknown.*

## Structure

`EntryModesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value2[] \| undefined`](../../doc/models/value-2.md) | Optional | List of point-of-sale entry modes.<br><br>Possible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EntryModesRestriction, Value2 } from 'adyen';

const entryModesRestriction: EntryModesRestriction = {
  operation: 'operation4',
  value: [
    Value2.Magstripe,
    Value2.Manual,
    Value2.Ocr
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

