
# Entry Modes Restriction 1

List of point-of-sale entry modes and the operation..

Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`EntryModesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value2[] \| undefined`](../../doc/models/value-2.md) | Optional | List of point-of-sale entry modes.<br><br>Possible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EntryModesRestriction1, Value2 } from 'adyenlib';

const entryModesRestriction1: EntryModesRestriction1 = {
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

