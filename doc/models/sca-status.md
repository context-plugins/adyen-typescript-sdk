
# Sca Status

The status of Strong Customer Authentication (SCA). Possible values:

* **notPerformed**: the requester was unable to successfully authenticate the request using SCA, or has an SCA exemption.
* **pending**: the request is pending SCA authentication.
* **performed**: the request is successfully authenticated using SCA.

## Enumeration

`ScaStatus`

## Fields

| Name |
|  --- |
| `NotPerformed` |
| `Pending` |
| `Performed` |

## Example

```ts
import { ScaStatus } from 'adyen';

const scaStatus = ScaStatus.Pending;
```

