
# Finish Sca Device Registration Response

*This model accepts additional fields of type unknown.*

## Structure

`FinishScaDeviceRegistrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scaDevice` | [`ScaDevice1 \| undefined`](../../doc/models/sca-device-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FinishScaDeviceRegistrationResponse, ScaDeviceType1 } from 'adyen';

const finishScaDeviceRegistrationResponse: FinishScaDeviceRegistrationResponse = {
  scaDevice: {
    id: 'id2',
    name: 'name2',
    type: ScaDeviceType1.Browser,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

