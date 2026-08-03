
# Authentication Method 1

## Enumeration

`AuthenticationMethod1`

## Fields

| Name |
|  --- |
| `Bypass` |
| `ManualVerification` |
| `MerchantAuthentication` |
| `OfflinePin` |
| `OnlinePin` |
| `PaperSignature` |
| `SecuredChannel` |
| `SecureCertificate` |
| `SecureNoCertificate` |
| `SignatureCapture` |
| `UnknownMethod` |

## Example

```ts
import { AuthenticationMethod1 } from 'adyenlib';

const authenticationMethod1 = AuthenticationMethod1.PaperSignature;
```

