
# Merchant 1

*This model accepts additional fields of type unknown.*

## Structure

`Merchant1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Merchant1 } from 'adyen';

const merchant1: Merchant1 = {
  href: 'href2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

