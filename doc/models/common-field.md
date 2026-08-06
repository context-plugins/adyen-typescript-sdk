
# Common Field

Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc.

*This model accepts additional fields of type unknown.*

## Structure

`CommonField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CommonField } from 'adyen';

const commonField: CommonField = {
  name: 'name8',
  version: 'version4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

