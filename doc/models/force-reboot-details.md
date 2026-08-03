
# Force Reboot Details

*This model accepts additional fields of type unknown.*

## Structure

`ForceRebootDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type210 \| undefined`](../../doc/models/type-210.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ForceRebootDetails, Type210 } from 'adyenlib';

const forceRebootDetails: ForceRebootDetails = {
  type: Type210.ForceReboot,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

