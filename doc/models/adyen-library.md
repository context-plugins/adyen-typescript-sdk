
# Adyen Library

*This model accepts additional fields of type unknown.*

## Structure

`AdyenLibrary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdyenLibrary } from 'adyenlib';

const adyenLibrary: AdyenLibrary = {
  name: 'name8',
  version: 'version4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

