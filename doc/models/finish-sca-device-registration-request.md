
# Finish Sca Device Registration Request

## Structure

`FinishScaDeviceRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `20000` |

## Example

```ts
import { FinishScaDeviceRegistrationRequest } from 'adyen';

const finishScaDeviceRegistrationRequest: FinishScaDeviceRegistrationRequest = {
  sdkOutput: 'sdkOutput0',
};
```

