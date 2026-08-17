
# Three DS Req Auth Method Enum

Mechanism used by the Cardholder to authenticate to the 3DS Requestor. Allowed values:

* **01** — No 3DS Requestor authentication occurred (for example, cardholder “logged in” as guest).
* **02** — Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials.
* **03** — Login to the cardholder account at the 3DS Requestor system using federated ID.
* **04** — Login to the cardholder account at the 3DS Requestor system using issuer credentials.
* **05** — Login to the cardholder account at the 3DS Requestor system using third-party authentication.
* **06** — Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator., Indicates whether a challenge is requested for this transaction. Possible values:
* **01** — No preference
* **02** — No challenge requested
* **03** — Challenge requested (3DS Requestor preference)
* **04** — Challenge requested (Mandate)
* **05** — No challenge (transactional risk analysis is already performed)
* **06** — Data Only

## Enumeration

`ThreeDSReqAuthMethodEnum`

## Fields

| Name |
|  --- |
| `Enum01` |
| `Enum02` |
| `Enum03` |
| `Enum04` |
| `Enum05` |
| `Enum06` |

## Example

```ts
import { ThreeDSReqAuthMethodEnum } from 'adyen';

const threeDSReqAuthMethod = ThreeDSReqAuthMethodEnum.Enum01;
```

