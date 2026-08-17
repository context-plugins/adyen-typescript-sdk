
# Encryption Protocol Enum

SSL version to access the public webhook URL specified in the `url` field. Possible values:

* **TLSv1.3**
* **TLSv1.2**
* **HTTP** - Only allowed on Test environment.

If not specified, the webhook will use `sslVersion`: **TLSv1.2**.

## Enumeration

`EncryptionProtocolEnum`

## Fields

| Name |
|  --- |
| `HTTP` |
| `EnumTLSv12` |
| `EnumTLSv13` |

## Example

```ts
import { EncryptionProtocolEnum } from 'adyen';

const encryptionProtocol = EncryptionProtocolEnum.EnumTLSv13;
```

