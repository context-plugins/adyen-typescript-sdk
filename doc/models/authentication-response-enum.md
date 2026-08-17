
# Authentication Response Enum

In 3D Secure 2, this is the `transStatus` from the challenge result. If the transaction was frictionless, omit this parameter.

## Enumeration

`AuthenticationResponseEnum`

## Fields

| Name |
|  --- |
| `Y` |
| `N` |
| `U` |
| `A` |

## Example

```ts
import { AuthenticationResponseEnum } from 'adyen';

const authenticationResponse = AuthenticationResponseEnum.U;
```

