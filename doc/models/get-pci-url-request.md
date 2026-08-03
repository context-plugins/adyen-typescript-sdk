
# Get Pci Url Request

*This model accepts additional fields of type unknown.*

## Structure

`GetPciUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The account holder code you provided when you created the account holder. |
| `returnUrl` | `string \| undefined` | Optional | The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetPciUrlRequest } from 'adyenlib';

const getPciUrlRequest: GetPciUrlRequest = {
  accountHolderCode: 'accountHolderCode6',
  returnUrl: 'returnUrl8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

