
# Output Barcode

## Structure

`OutputBarcode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcodeValue` | `string` | Required | Value with a Barcode coding. The barcode value to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { OutputBarcode } from 'adyen';

const outputBarcode: OutputBarcode = {
  barcodeValue: 'BarcodeValue2',
};
```

