
# Output Result 1

Information related to the result the output (display, print, input).
If DisplayOutput present in the request.

## Structure

`OutputResult1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `device` | [`Device3Enum`](../../doc/models/device-3-enum.md) | Required | Logical device located on a Sale Terminal or a POI Terminal, in term of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.<br>Copy.<br>Possible values:<br><br>* **CashierDisplay**<br>* **CashierInput**<br>* **CustomerDisplay**<br>* **CustomerInput** |
| `infoQualify` | [`InfoQualify3Enum`](../../doc/models/info-qualify-3-enum.md) | Required | Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer.<br>Copy.<br>Possible values:<br><br>* **CustomerAssistance**<br>* **Display**<br>* **Document**<br>* **Error**<br>* **Input**<br>* **POIReplication**<br>* **Receipt**<br>* **Sound**<br>* **Status**<br>* **Voucher** |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import {
  Device3Enum,
  ErrorCondition1Enum,
  InfoQualify3Enum,
  OutputResult1,
  Result11Enum,
} from 'adyen';

const outputResult1: OutputResult1 = {
  device: Device3Enum.CashierInput,
  infoQualify: InfoQualify3Enum.Input,
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

