
# Register Sca Response

*This model accepts additional fields of type unknown.*

## Structure

`RegisterScaResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the SCA device you are registering. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument for which you are registering the SCA device. |
| `sdkInput` | `string \| undefined` | Optional | A string that you must pass to the authentication SDK to continue with the registration process.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `success` | `boolean \| undefined` | Optional | Specifies if the registration was initiated successfully. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RegisterScaResponse } from 'adyen';

const registerScaResponse: RegisterScaResponse = {
  id: 'id4',
  paymentInstrumentId: 'paymentInstrumentId6',
  sdkInput: 'sdkInput8',
  success: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

