
# Standalone Payment Cancel Request

## Structure

`StandalonePaymentCancelRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationInfo` | [`ApplicationInfo \| undefined`](../../doc/models/application-info.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentReference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment that you want to cancel. |
| `reference` | `string \| undefined` | Optional | Your reference for the cancel request. Maximum length: 80 characters. |

## Example

```ts
import { StandalonePaymentCancelRequest } from 'adyen';

const standalonePaymentCancelRequest: StandalonePaymentCancelRequest = {
  merchantAccount: 'merchantAccount4',
  paymentReference: 'paymentReference2',
  applicationInfo: {
    adyenLibrary: {
      name: 'name8',
      version: 'version4',
    },
    adyenPaymentSource: {
      name: 'name2',
      version: 'version8',
    },
    externalPlatform: {
      integrator: 'integrator0',
      name: 'name4',
      version: 'version0',
    },
    merchantApplication: {
      name: 'name2',
      version: 'version8',
    },
    merchantDevice: {
      os: 'os4',
      osVersion: 'osVersion6',
      reference: 'reference8',
    },
  },
  reference: 'reference8',
};
```

