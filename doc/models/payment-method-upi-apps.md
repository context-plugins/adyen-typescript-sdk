
# Payment Method Upi Apps

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodUpiApps`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appIdentifierInfo` | [`AppIdentifierInfo \| undefined`](../../doc/models/app-identifier-info.md) | Optional | - |
| `id` | `string` | Required | The unique identifier of this app, to submit in requests to /payments. |
| `name` | `string` | Required | A localized name of the app. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentMethodUpiApps } from 'adyen';

const paymentMethodUpiApps: PaymentMethodUpiApps = {
  id: 'id0',
  name: 'name0',
  appIdentifierInfo: {
    androidPackageId: 'androidPackageId8',
    iosScheme: 'iosScheme8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

