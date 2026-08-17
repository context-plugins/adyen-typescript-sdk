
# Pay Pal Response Info

## Structure

`PayPalResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `directCapture` | `boolean \| undefined` | Optional | Indicates if direct (immediate) capture for PayPal is enabled. If set to **true**, this setting overrides the [capture](https://docs.adyen.com/online-payments/capture) settings of your merchant account. Default value: **true**. |
| `payerId` | `string \| undefined` | Optional | PayPal Merchant ID. Character length and limitations: 13 single-byte alphanumeric characters.<br><br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13` |
| `subject` | `string \| undefined` | Optional | Your business email address. |

## Example

```ts
import { PayPalResponseInfo } from 'adyen';

const payPalResponseInfo: PayPalResponseInfo = {
  directCapture: false,
  payerId: 'payerId6',
  subject: 'subject4',
};
```

