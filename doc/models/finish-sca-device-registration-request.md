
# Finish Sca Device Registration Request

*This model accepts additional fields of type unknown.*

## Structure

`FinishScaDeviceRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `20000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FinishScaDeviceRegistrationRequest } from 'adyenlib';

const finishScaDeviceRegistrationRequest: FinishScaDeviceRegistrationRequest = {
  sdkOutput: 'sdkOutput0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

