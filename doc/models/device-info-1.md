
# Device Info 1

Contains information about the device used to provision the network token.

## Structure

`DeviceInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formFactor` | `string \| undefined` | Optional | The type of device used to provision the network token. |
| `osName` | `string \| undefined` | Optional | The operating system of the device used to provision the network token. |
| `phone` | [`PhoneInfo2 \| undefined`](../../doc/models/phone-info-2.md) | Optional | The information about the phone number of the device used to provision the the network token. This object is conditionally returned and is available for up to 24 hours after the provisioning request (access to this field requires a specific user role, please contact your Adyen representative to request permission). |

## Example

```ts
import { DeviceInfo1 } from 'adyen';

const deviceInfo1: DeviceInfo1 = {
  formFactor: 'formFactor0',
  osName: 'osName0',
  phone: {
    hashedNumber: 'hashedNumber2',
    lastFourDigits: 'lastFourDigits8',
    number: 'number8',
  },
};
```

