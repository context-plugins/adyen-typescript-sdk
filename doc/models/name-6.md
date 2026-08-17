
# Name 6

## Structure

`Name6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | Set to **requested** to request a [name validation](https://docs.adyen.com/payment-methods/cards/name-validation) to verify if the cardholder name provided by the shopper matches the cardholder name on file at the issuing bank. |

## Example

```ts
import { Name6 } from 'adyen';

const name6: Name6 = {
  status: 'status2',
};
```

