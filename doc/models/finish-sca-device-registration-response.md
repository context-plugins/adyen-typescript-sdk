
# Finish Sca Device Registration Response

## Structure

`FinishScaDeviceRegistrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scaDevice` | [`ScaDevice \| undefined`](../../doc/models/sca-device.md) | Optional | A resource that contains information about a device, including its unique ID, name, and type. |

## Example

```ts
import {
  FinishScaDeviceRegistrationResponse,
  ScaDeviceType1Enum,
} from 'adyen';

const finishScaDeviceRegistrationResponse: FinishScaDeviceRegistrationResponse = {
  scaDevice: {
    id: 'id2',
    name: 'name2',
    type: ScaDeviceType1Enum.Browser,
  },
};
```

