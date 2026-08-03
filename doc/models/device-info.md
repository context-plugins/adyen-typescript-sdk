
# Device Info

*This model accepts additional fields of type unknown.*

## Structure

`DeviceInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formFactor` | `string \| undefined` | Optional | The type of device used to provision the network token. |
| `osName` | `string \| undefined` | Optional | The operating system of the device used to provision the network token. |
| `phone` | [`PhoneInfo \| undefined`](../../doc/models/phone-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeviceInfo } from 'adyenlib';

const deviceInfo: DeviceInfo = {
  formFactor: 'formFactor2',
  osName: 'osName2',
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

