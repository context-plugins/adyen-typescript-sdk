
# Last

*This model accepts additional fields of type unknown.*

## Structure

`Last`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Last } from 'adyen';

const last: Last = {
  href: 'href2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

