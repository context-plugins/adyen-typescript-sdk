
# Host Status

Indicate the reachability of the host by the POI Terminal.
State of a Host.

*This model accepts additional fields of type unknown.*

## Structure

`HostStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerId` | `number` | Required | Identification of the Acquirer. |
| `isReachableFlag` | `boolean \| undefined` | Optional | Indicate if a Host is reachable.<br><br>**Default**: `true` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HostStatus } from 'adyen';

const hostStatus: HostStatus = {
  acquirerId: 230,
  isReachableFlag: true,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

