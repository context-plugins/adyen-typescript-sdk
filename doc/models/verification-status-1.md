
# Verification Status 1

The status of the verification checks for the capability.

Possible values:

* **pending**: Adyen is running the verification.

* **invalid**: The verification failed. Check if the `errors` array contains more information.

* **valid**: The verification has been successfully completed.

* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.

## Enumeration

`VerificationStatus1`

## Fields

| Name |
|  --- |
| `Invalid` |
| `Pending` |
| `Rejected` |
| `Valid` |

## Example

```ts
import { VerificationStatus1 } from 'adyen';

const verificationStatus1 = VerificationStatus1.Invalid;
```

