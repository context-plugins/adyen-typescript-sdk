
# Support 1

Support information for the legal entity. Required if you have a platform setup.

*This model accepts additional fields of type unknown.*

## Structure

`Support1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | The support email address of the legal entity. Required if you have a platform setup. |
| `phone` | [`PhoneNumber \| undefined`](../../doc/models/phone-number.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Support1 } from 'adyen';

const support1: Support1 = {
  email: 'email2',
  phone: {
    number: 'number8',
    phoneCountryCode: 'phoneCountryCode8',
    type: 'type0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

