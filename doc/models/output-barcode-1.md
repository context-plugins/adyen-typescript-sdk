
# Output Barcode 1

Barcode content to display or print.
Mandatory if `OutputFormat` is Barcode, not allowed otherwise.

*This model accepts additional fields of type unknown.*

## Structure

`OutputBarcode1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcodeValue` | `string` | Required | Value with a Barcode coding. The barcode value to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OutputBarcode1 } from 'adyenlib';

const outputBarcode1: OutputBarcode1 = {
  barcodeValue: 'BarcodeValue0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

