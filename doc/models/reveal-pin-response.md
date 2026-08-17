
# Reveal Pin Response

## Structure

`RevealPinResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedPinBlock` | `string` | Required | The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block). |
| `token` | `string` | Required | The 16-digit token that you need to extract the `encryptedPinBlock`. |

## Example

```ts
import { RevealPinResponse } from 'adyen';

const revealPinResponse: RevealPinResponse = {
  encryptedPinBlock: 'encryptedPinBlock0',
  token: 'token0',
};
```

