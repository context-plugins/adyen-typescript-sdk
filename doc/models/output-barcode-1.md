
# Output Barcode 1

Barcode content to display or print.
Mandatory if `OutputFormat` is Barcode, not allowed otherwise.

## Structure

`OutputBarcode1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcodeValue` | `string` | Required | Value with a Barcode coding. The barcode value to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { OutputBarcode1 } from 'adyen';

const outputBarcode1: OutputBarcode1 = {
  barcodeValue: 'BarcodeValue0',
};
```

