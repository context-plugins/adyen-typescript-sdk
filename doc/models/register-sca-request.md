
# Register SCA Request

## Structure

`RegisterSCARequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the SCA device that you are registering. You can use it to help your users identify the device.<br><br>If you do not specify a `name`, Adyen automatically generates one. |
| `paymentInstrumentId` | `string` | Required | The unique identifier of the payment instrument for which you are registering the SCA device. |
| `strongCustomerAuthentication` | [`DelegatedAuthenticationData1`](../../doc/models/delegated-authentication-data-1.md) | Required | Contains information required to register the SCA device. |

## Example

```ts
import { RegisterSCARequest } from 'adyen';

const registerSCARequest: RegisterSCARequest = {
  paymentInstrumentId: 'paymentInstrumentId6',
  strongCustomerAuthentication: {
    sdkOutput: 'sdkOutput4',
  },
  name: 'name4',
};
```

