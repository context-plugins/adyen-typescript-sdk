
# Begin Sca Device Registration Response

## Structure

`BeginScaDeviceRegistrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scaDevice` | [`ScaDevice \| undefined`](../../doc/models/sca-device.md) | Optional | A resource that contains information about a device, including its unique ID, name, and type. |
| `sdkInput` | `string \| undefined` | Optional | A string that you must pass to the authentication SDK to continue with the registration process.<br><br>**Constraints**: *Maximum Length*: `20000` |

## Example

```ts
import {
  BeginScaDeviceRegistrationResponse,
  ScaDeviceType1Enum,
} from 'adyen';

const beginScaDeviceRegistrationResponse: BeginScaDeviceRegistrationResponse = {
  scaDevice: {
    id: 'id2',
    name: 'name2',
    type: ScaDeviceType1Enum.Browser,
  },
  sdkInput: 'sdkInput4',
};
```

