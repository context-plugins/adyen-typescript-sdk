
# Authentication Method 1 Enum

## Enumeration

`AuthenticationMethod1Enum`

## Fields

| Name |
|  --- |
| `Bypass` |
| `ManualVerification` |
| `MerchantAuthentication` |
| `OfflinePIN` |
| `OnlinePIN` |
| `PaperSignature` |
| `SecuredChannel` |
| `SecureCertificate` |
| `SecureNoCertificate` |
| `SignatureCapture` |
| `UnknownMethod` |

## Example

```ts
import { AuthenticationMethod1Enum } from 'adyen';

const authenticationMethod1 = AuthenticationMethod1Enum.PaperSignature;
```

