
# Utility Request

*This model accepts additional fields of type unknown.*

## Structure

`UtilityRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originDomains` | `string[]` | Required | The list of origin domains, for which origin keys are requested. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UtilityRequest } from 'adyenlib';

const utilityRequest: UtilityRequest = {
  originDomains: [
    'originDomains2',
    'originDomains3',
    'originDomains4'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

