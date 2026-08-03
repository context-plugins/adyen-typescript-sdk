
# Pay Pal Info 1

Details to provide if `type` is **paypal**.

*This model accepts additional fields of type unknown.*

## Structure

`PayPalInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `directCapture` | `boolean \| undefined` | Optional | Indicates if direct (immediate) capture for PayPal is enabled. If set to **true**, this setting overrides the [capture](https://docs.adyen.com/online-payments/capture) settings of your merchant account. Default value: **true**. |
| `payerId` | `string` | Required | PayPal Merchant ID. Character length and limitations: 13 single-byte alphanumeric characters.<br><br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13` |
| `subject` | `string` | Required | Your business email address. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayPalInfo1 } from 'adyenlib';

const payPalInfo1: PayPalInfo1 = {
  payerId: 'payerId2',
  subject: 'subject0',
  directCapture: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

