
# Utility Request

## Structure

`UtilityRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originDomains` | `string[]` | Required | The list of origin domains, for which origin keys are requested. |

## Example

```ts
import { UtilityRequest } from 'adyen';

const utilityRequest: UtilityRequest = {
  originDomains: [
    'originDomains2',
    'originDomains3',
    'originDomains4'
  ],
};
```

