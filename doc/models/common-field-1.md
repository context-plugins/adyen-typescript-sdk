
# Common Field 1

Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc.

## Structure

`CommonField1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |

## Example

```ts
import { CommonField1 } from 'adyen';

const commonField1: CommonField1 = {
  name: 'name2',
  version: 'version8',
};
```

