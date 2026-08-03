
# Allowed Origins

*This model accepts additional fields of type unknown.*

## Structure

`AllowedOrigins`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AllowedOrigins } from 'adyenlib';

const allowedOrigins: AllowedOrigins = {
  href: 'href6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

