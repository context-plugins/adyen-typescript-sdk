
# Output Barcode

*This model accepts additional fields of type unknown.*

## Structure

`OutputBarcode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcodeValue` | `string` | Required | Value with a Barcode coding. The barcode value to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OutputBarcode } from 'adyen';

const outputBarcode: OutputBarcode = {
  barcodeValue: 'BarcodeValue2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

