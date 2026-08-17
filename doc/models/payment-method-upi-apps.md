
# Payment Method UPI Apps

## Structure

`PaymentMethodUPIApps`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appIdentifierInfo` | [`AppIdentifierInfo1 \| undefined`](../../doc/models/app-identifier-info-1.md) | Optional | The app identifier information containing iOS scheme and Android package ID. |
| `id` | `string` | Required | The unique identifier of this app, to submit in requests to /payments. |
| `name` | `string` | Required | A localized name of the app. |

## Example

```ts
import { PaymentMethodUPIApps } from 'adyen';

const paymentMethodUPIApps: PaymentMethodUPIApps = {
  id: 'id2',
  name: 'name2',
  appIdentifierInfo: {
    androidPackageId: 'androidPackageId8',
    iosScheme: 'iosScheme8',
  },
};
```

