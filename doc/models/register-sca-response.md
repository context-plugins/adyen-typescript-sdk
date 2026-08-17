
# Register SCA Response

## Structure

`RegisterSCAResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the SCA device you are registering. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument for which you are registering the SCA device. |
| `sdkInput` | `string \| undefined` | Optional | A string that you must pass to the authentication SDK to continue with the registration process.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `success` | `boolean \| undefined` | Optional | Specifies if the registration was initiated successfully. |

## Example

```ts
import { RegisterSCAResponse } from 'adyen';

const registerSCAResponse: RegisterSCAResponse = {
  id: 'id4',
  paymentInstrumentId: 'paymentInstrumentId6',
  sdkInput: 'sdkInput8',
  success: false,
};
```

