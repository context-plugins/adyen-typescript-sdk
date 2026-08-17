
# Receipt Options

## Structure

`ReceiptOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `headerLine1` | `string \| undefined` | Optional | The text of the first header line to be shown on the receipt.<br><br>**Constraints**: *Maximum Length*: `100` |
| `headerLine2` | `string \| undefined` | Optional | The text of the second header line to be shown on the receipt.<br><br>**Constraints**: *Maximum Length*: `100` |
| `logo` | `string \| undefined` | Optional | The receipt logo converted to a Base64-encoded string. The image must be a .bmp file of < 256 KB, dimensions 240 (H) x 384 (W) px.<br><br>**Constraints**: *Maximum Length*: `350000` |
| `promptBeforePrinting` | `boolean \| undefined` | Optional | Indicates whether a screen appears asking if you want to print the shopper receipt. |
| `qrCodeData` | `string \| undefined` | Optional | Data to print on the receipt as a QR code. This can include static text and the following variables:<br><br>- `${merchantreference}`: the merchant reference of the transaction.<br>- `${pspreference}`: the PSP reference of the transaction.<br><br>For example, **http://www.example.com/order/${pspreference}/${merchantreference}**. |

## Example

```ts
import { ReceiptOptions } from 'adyen';

const receiptOptions: ReceiptOptions = {
  headerLine1: 'headerLine16',
  headerLine2: 'headerLine24',
  logo: 'logo0',
  promptBeforePrinting: false,
  qrCodeData: 'qrCodeData6',
};
```

