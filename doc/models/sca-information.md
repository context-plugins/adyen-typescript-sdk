
# Sca Information

*This model accepts additional fields of type unknown.*

## Structure

`ScaInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exemption` | [`ScaExemption \| undefined`](../../doc/models/sca-exemption.md) | Optional | - |
| `status` | [`ScaStatus`](../../doc/models/sca-status.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaExemption, ScaInformation, ScaStatus } from 'adyenlib';

const scaInformation: ScaInformation = {
  status: ScaStatus.Pending,
  exemption: ScaExemption.NotRegulated,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

