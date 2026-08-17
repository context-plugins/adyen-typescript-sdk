
# Challenge Indicator Enum

Possibility to specify a preference for receiving a challenge from the issuer.
Allowed values:

* `noPreference`
* `requestNoChallenge`
* `requestChallenge`
* `requestChallengeAsMandate`

## Enumeration

`ChallengeIndicatorEnum`

## Fields

| Name |
|  --- |
| `NoPreference` |
| `RequestNoChallenge` |
| `RequestChallenge` |
| `RequestChallengeAsMandate` |

## Example

```ts
import { ChallengeIndicatorEnum } from 'adyen';

const challengeIndicator = ChallengeIndicatorEnum.RequestChallenge;
```

