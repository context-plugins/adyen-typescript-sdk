
# Common Field 2

Merchant developed software, such as cashier application, used to interact with the Adyen API.

*This model accepts additional fields of type unknown.*

## Structure

`CommonField2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CommonField2 } from 'adyen';

const commonField2: CommonField2 = {
  name: 'name2',
  version: 'version8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

