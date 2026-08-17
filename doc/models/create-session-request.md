
# Create Session Request

## Structure

`CreateSessionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The unique identifier of your merchant account. |
| `setupToken` | `string` | Required | The setup token provided by the POS Mobile SDK.<br><br>- When using the Android POS Mobile SDK, obtain the token through the `AuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`.<br>- When using the iOS POS Mobile SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.<br><br>**Constraints**: *Maximum Length*: `50000` |
| `store` | `string \| undefined` | Optional | The unique identifier of the store that you want to process transactions for. |

## Example

```ts
import { CreateSessionRequest } from 'adyen';

const createSessionRequest: CreateSessionRequest = {
  merchantAccount: 'merchantAccount6',
  setupToken: 'setupToken0',
  store: 'store4',
};
```

