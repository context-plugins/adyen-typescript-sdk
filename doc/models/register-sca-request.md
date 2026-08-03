
# Register Sca Request

*This model accepts additional fields of type unknown.*

## Structure

`RegisterScaRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the SCA device that you are registering. You can use it to help your users identify the device.<br><br>If you do not specify a `name`, Adyen automatically generates one. |
| `paymentInstrumentId` | `string` | Required | The unique identifier of the payment instrument for which you are registering the SCA device. |
| `strongCustomerAuthentication` | [`DelegatedAuthenticationData`](../../doc/models/delegated-authentication-data.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RegisterScaRequest } from 'adyenlib';

const registerScaRequest: RegisterScaRequest = {
  paymentInstrumentId: 'paymentInstrumentId0',
  strongCustomerAuthentication: {
    sdkOutput: 'sdkOutput4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  name: 'name8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

