
# Common Field 4

Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For example, Magento plugin, Java API library, etc.

*This model accepts additional fields of type unknown.*

## Structure

`CommonField4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CommonField4 } from 'adyen';

const commonField4: CommonField4 = {
  name: 'name6',
  version: 'version2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

