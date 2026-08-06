
# Phone Info 2

The information about the phone number of the device used to provision the the network token. This object is conditionally returned and is available for up to 24 hours after the provisioning request (access to this field requires a specific user role, please contact your Adyen representative to request permission).

*This model accepts additional fields of type unknown.*

## Structure

`PhoneInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hashedNumber` | `string \| undefined` | Optional | The hashed value of the phone number used to provision the network token. |
| `lastFourDigits` | `string \| undefined` | Optional | The last four digits of the phone number used to provision the network token. |
| `number` | `string \| undefined` | Optional | The full phone number of the device used to provision the network token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PhoneInfo2 } from 'adyen';

const phoneInfo2: PhoneInfo2 = {
  hashedNumber: 'hashedNumber0',
  lastFourDigits: 'lastFourDigits0',
  number: 'number0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

