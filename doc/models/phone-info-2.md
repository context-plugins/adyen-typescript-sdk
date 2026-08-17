
# Phone Info 2

The information about the phone number of the device used to provision the the network token. This object is conditionally returned and is available for up to 24 hours after the provisioning request (access to this field requires a specific user role, please contact your Adyen representative to request permission).

## Structure

`PhoneInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hashedNumber` | `string \| undefined` | Optional | The hashed value of the phone number used to provision the network token. |
| `lastFourDigits` | `string \| undefined` | Optional | The last four digits of the phone number used to provision the network token. |
| `number` | `string \| undefined` | Optional | The full phone number of the device used to provision the network token. |

## Example

```ts
import { PhoneInfo2 } from 'adyen';

const phoneInfo2: PhoneInfo2 = {
  hashedNumber: 'hashedNumber0',
  lastFourDigits: 'lastFourDigits0',
  number: 'number0',
};
```

