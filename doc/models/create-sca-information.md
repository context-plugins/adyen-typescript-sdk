
# Create Sca Information

*This model accepts additional fields of type unknown.*

## Structure

`CreateScaInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exemption` | [`ScaExemption \| undefined`](../../doc/models/sca-exemption.md) | Optional | - |
| `scaOnApproval` | `boolean \| undefined` | Optional | Indicates whether to initiate Strong Customer Authentication (SCA) later, during approval, or immediately after you submit this request. Possible values:<br><br>* **true**: you can initiate SCA later, during approval, for all pending transfer limits.<br>* **false** (default): you initiate SCA immediately after submitting the transfer limit request. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateScaInformation, ScaExemption } from 'adyenlib';

const createScaInformation: CreateScaInformation = {
  exemption: ScaExemption.InitialLimit,
  scaOnApproval: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

