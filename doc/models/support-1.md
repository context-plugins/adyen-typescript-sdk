
# Support 1

Support information for the legal entity. Required if you have a platform setup.

## Structure

`Support1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | The support email address of the legal entity. Required if you have a platform setup. |
| `phone` | [`PhoneNumber1 \| undefined`](../../doc/models/phone-number-1.md) | Optional | The support phone number of the legal entity. Required if you have a platform setup. |

## Example

```ts
import { Support1 } from 'adyen';

const support1: Support1 = {
  email: 'email2',
  phone: {
    number: 'number8',
    type: 'type0',
  },
};
```

