
# Sca Device

A resource that contains information about a device, including its unique ID, name, and type.

*This model accepts additional fields of type unknown.*

## Structure

`ScaDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the SCA device you are registering. |
| `name` | `string` | Required | The name of the SCA device that you are registering. You can use it to help your users identify the device.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `64` |
| `type` | [`ScaDeviceType1`](../../doc/models/sca-device-type-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaDevice, ScaDeviceType1 } from 'adyen';

const scaDevice: ScaDevice = {
  id: 'id2',
  name: 'name2',
  type: ScaDeviceType1.Browser,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

