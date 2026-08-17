
# Login Request

It conveys information related to the session (period between a Login and the following Logout) to process.
Content of the `LoginRequest` message.

## Structure

`LoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateTime` | `string` | Required | Date and Time. In the Login request message, the Sale System gives its date and time to the POI System. In the Login response, the POI System gives its date and time to the Sale System. |
| `saleSoftware` | [`SaleSoftware1`](../../doc/models/sale-software-1.md) | Required | Information related to the software of the Sale System which manages the Sale to POI protocol. |
| `saleTerminalData` | [`SaleTerminalData2 \| undefined`](../../doc/models/sale-terminal-data-2.md) | Optional | Information related to the software and hardware feature of the Sale Terminal.<br>Present if the login involve a Sale Terminal. |
| `trainingModeFlag` | `boolean \| undefined` | Optional | Training mode.<br>This flag indicates to the POI that the entire session will be not used to make real transaction, but is used for test of system or operator training.<br><br>**Default**: `false` |
| `operatorLanguage` | `string` | Required | Language of the Cashier or Operator.<br>Default value for Device type displays.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `operatorID` | `string \| undefined` | Optional | Identification of the Cashier or Operator.<br>Four conditions to send it:<br><br>* The Sale System wants the POI to log it in the transaction log.<br>* Because of reconciliation with total on OperatorID.<br>* Because the POI needs it.<br>* Acquirer or issuer need it.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `shiftNumber` | `string \| undefined` | Optional | Shift number.<br>Same as OperatorID.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `tokenRequestedType` | [`TokenRequestedType1Enum \| undefined`](../../doc/models/token-requested-type-1-enum.md) | Optional | Type of token replacing the PAN of a payment card to identify the payment<br>mean of the customer. It allows, for a merchant, to use a token for a transaction<br>only or for a longer period.<br>Possible values:<br><br>* **Customer**<br>* **Transaction** |
| `customerOrderReq` | [`CustomerOrderReqEnum[] \| undefined`](../../doc/models/customer-order-req-enum.md) | Optional | List of customer order open, closed or both to be sent in the response messages.<br>Possible values:<br><br>* **Both**<br>* **Closed**<br>* **Open** |
| `pOISerialNumber` | `string \| undefined` | Optional | Serial number of a POI Terminal.<br>If the login involve a POI Terminal and not the first Login to the POI System.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { LoginRequest, TokenRequestedType1Enum } from 'adyen';

const loginRequest: LoginRequest = {
  dateTime: '2016-03-13T12:52:32.123Z',
  saleSoftware: {
    manufacturerID: 'ManufacturerID4',
    applicationName: 'ApplicationName8',
    softwareVersion: 'SoftwareVersion0',
    certificationCode: 'CertificationCode4',
  },
  operatorLanguage: 'OperatorLanguage0',
  saleTerminalData: {
    totalsGroupID: 'TotalsGroupID4',
  },
  trainingModeFlag: false,
  operatorID: 'OperatorID6',
  shiftNumber: 'ShiftNumber8',
  tokenRequestedType: TokenRequestedType1Enum.Transaction,
};
```

