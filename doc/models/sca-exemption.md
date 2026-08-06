
# Sca Exemption

The type of exemption for Strong Customer Authentication (SCA). Possible values:

* **lowerLimit**: the newly created limit is lower than the existing limit.
* **notRegulated**: the limit is created in a country, region, or industry where it is not mandated by law to use SCA.
* **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance platform.
* **initialLimit**: there are no existing transfer limits set on the balance account or balance platform.
* **alreadyPerformed**: you are confident about your user's identity and do not need to verify this using SCA.

## Enumeration

`ScaExemption`

## Fields

| Name |
|  --- |
| `SetByPlatform` |
| `InitialLimit` |
| `LowerLimit` |
| `NotRegulated` |
| `AlreadyPerformed` |

## Example

```ts
import { ScaExemption } from 'adyen';

const scaExemption = ScaExemption.InitialLimit;
```

