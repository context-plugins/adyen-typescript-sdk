
# Phone Info

*This model accepts additional fields of type unknown.*

## Structure

`PhoneInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hashedNumber` | `string \| undefined` | Optional | The hashed value of the phone number used to provision the network token. |
| `lastFourDigits` | `string \| undefined` | Optional | The last four digits of the phone number used to provision the network token. |
| `number` | `string \| undefined` | Optional | The full phone number of the device used to provision the network token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PhoneInfo } from 'adyen';

const phoneInfo: PhoneInfo = {
  hashedNumber: 'hashedNumber6',
  lastFourDigits: 'lastFourDigits4',
  number: 'number6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

