
# Device Status Response

*This model accepts additional fields of type unknown.*

## Structure

`DeviceStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | The unique identification of the device.<br>This can be a payment terminal ID in the format _[terminal model]-[serial number]_ (for example, P400‑123456789), or an SDK installation ID as used in Mobile solutions. |
| `status` | [`DeviceStatus1 \| undefined`](../../doc/models/device-status-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeviceStatus1, DeviceStatusResponse } from 'adyen';

const deviceStatusResponse: DeviceStatusResponse = {
  deviceId: 'deviceId8',
  status: DeviceStatus1.Online,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

