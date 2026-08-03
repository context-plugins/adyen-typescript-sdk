
# Sca Device 1

*This model accepts additional fields of type unknown.*

## Structure

`ScaDevice1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the SCA device you are registering. |
| `name` | `string` | Required | The name of the SCA device that you are registering. You can use it to help your users identify the device.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `64` |
| `type` | [`ScaDeviceType1`](../../doc/models/sca-device-type-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaDevice1, ScaDeviceType1 } from 'adyenlib';

const scaDevice1: ScaDevice1 = {
  id: 'id2',
  name: 'name2',
  type: ScaDeviceType1.Android,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

