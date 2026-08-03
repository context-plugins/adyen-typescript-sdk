
# Connected Devices Response

*This model accepts additional fields of type unknown.*

## Structure

`ConnectedDevicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uniqueDeviceIds` | `string[] \| undefined` | Optional | A list of the unique IDs of the devices that have an active cloud connection.<br>The IDs are payment terminal IDs in the format _[terminal model]-[serial number]_ (for example, P400‑123456789), or SDK installation IDs as used in Mobile solutions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ConnectedDevicesResponse } from 'adyenlib';

const connectedDevicesResponse: ConnectedDevicesResponse = {
  uniqueDeviceIds: [
    'uniqueDeviceIds9'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

