
# Verification Status Enum

Payment method status. Possible values:

* **valid**
* **pending**
* **invalid**
* **rejected**, The status of the verification checks for the supporting entity capability.

Possible values:

* **pending**: Adyen is running the verification.

* **invalid**: The verification failed. Check if the `errors` array contains more information.

* **valid**: The verification has been successfully completed.

* **rejected**: Adyen has verified the information, but found reasons to not allow the capability., The status of the verification checks for the capability.

Possible values:

* **pending**: Adyen is running the verification.

* **invalid**: The verification failed. Check if the `errors` array contains more information.

* **valid**: The verification has been successfully completed.

* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.

## Enumeration

`VerificationStatusEnum`

## Fields

| Name |
|  --- |
| `Valid` |
| `Pending` |
| `Invalid` |
| `Rejected` |

## Example

```ts
import { VerificationStatusEnum } from 'adyen';

const verificationStatus = VerificationStatusEnum.Valid;
```

