
# Reveal Pin Response

*This model accepts additional fields of type unknown.*

## Structure

`RevealPinResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedPinBlock` | `string` | Required | The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block). |
| `token` | `string` | Required | The 16-digit token that you need to extract the `encryptedPinBlock`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RevealPinResponse } from 'adyenlib';

const revealPinResponse: RevealPinResponse = {
  encryptedPinBlock: 'encryptedPinBlock0',
  token: 'token0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

