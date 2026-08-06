
# Sca Information 1

Information for the Strong Customer Authentication (SCA)

*This model accepts additional fields of type unknown.*

## Structure

`ScaInformation1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exemption` | [`ScaExemption \| undefined`](../../doc/models/sca-exemption.md) | Optional | - |
| `status` | [`ScaStatus`](../../doc/models/sca-status.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaExemption, ScaInformation1, ScaStatus } from 'adyen';

const scaInformation1: ScaInformation1 = {
  status: ScaStatus.Performed,
  exemption: ScaExemption.SetByPlatform,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

