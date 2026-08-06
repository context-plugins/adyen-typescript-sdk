
# Begin Sca Device Registration Response

*This model accepts additional fields of type unknown.*

## Structure

`BeginScaDeviceRegistrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scaDevice` | [`ScaDevice1 \| undefined`](../../doc/models/sca-device-1.md) | Optional | - |
| `sdkInput` | `string \| undefined` | Optional | A string that you must pass to the authentication SDK to continue with the registration process.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BeginScaDeviceRegistrationResponse, ScaDeviceType1 } from 'adyen';

const beginScaDeviceRegistrationResponse: BeginScaDeviceRegistrationResponse = {
  scaDevice: {
    id: 'id2',
    name: 'name2',
    type: ScaDeviceType1.Browser,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  sdkInput: 'sdkInput4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

