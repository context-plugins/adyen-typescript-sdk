
# Host Status

Indicate the reachability of the host by the POI Terminal.
State of a Host.

## Structure

`HostStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerID` | `number` | Required | Identification of the Acquirer. |
| `isReachableFlag` | `boolean \| undefined` | Optional | Indicate if a Host is reachable.<br><br>**Default**: `true` |

## Example

```ts
import { HostStatus } from 'adyen';

const hostStatus: HostStatus = {
  acquirerID: 230,
  isReachableFlag: true,
};
```

