
# Get Pci Url Request

## Structure

`GetPciUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The account holder code you provided when you created the account holder. |
| `returnUrl` | `string \| undefined` | Optional | The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters. |

## Example

```ts
import { GetPciUrlRequest } from 'adyen';

const getPciUrlRequest: GetPciUrlRequest = {
  accountHolderCode: 'accountHolderCode6',
  returnUrl: 'returnUrl8',
};
```

