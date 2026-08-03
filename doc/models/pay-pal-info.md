
# Pay Pal Info

*This model accepts additional fields of type unknown.*

## Structure

`PayPalInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `directCapture` | `boolean \| undefined` | Optional | Indicates if direct (immediate) capture for PayPal is enabled. If set to **true**, this setting overrides the [capture](https://docs.adyen.com/online-payments/capture) settings of your merchant account. Default value: **true**. |
| `payerId` | `string` | Required | PayPal Merchant ID. Character length and limitations: 13 single-byte alphanumeric characters.<br><br>**Constraints**: *Minimum Length*: `13`, *Maximum Length*: `13` |
| `subject` | `string` | Required | Your business email address. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayPalInfo } from 'adyenlib';

const payPalInfo: PayPalInfo = {
  payerId: 'payerId0',
  subject: 'subject8',
  directCapture: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

