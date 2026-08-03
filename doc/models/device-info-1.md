
# Device Info 1

Contains information about the device used to provision the network token.

*This model accepts additional fields of type unknown.*

## Structure

`DeviceInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formFactor` | `string \| undefined` | Optional | The type of device used to provision the network token. |
| `osName` | `string \| undefined` | Optional | The operating system of the device used to provision the network token. |
| `phone` | [`PhoneInfo \| undefined`](../../doc/models/phone-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeviceInfo1 } from 'adyenlib';

const deviceInfo1: DeviceInfo1 = {
  formFactor: 'formFactor0',
  osName: 'osName0',
  phone: {
    hashedNumber: 'hashedNumber2',
    lastFourDigits: 'lastFourDigits8',
    number: 'number8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

