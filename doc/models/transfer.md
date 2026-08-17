
# Transfer

## Structure

`Transfer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`ResourceReference5 \| undefined`](../../doc/models/resource-reference-5.md) | Optional | The account holder associated with the balance account involved in the transfer. |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount of the transfer. |
| `balanceAccount` | [`ResourceReference1 \| undefined`](../../doc/models/resource-reference-1.md) | Optional | Contains information about the balance account involved in the transfer. |
| `category` | [`Category3Enum`](../../doc/models/category-3-enum.md) | Required | The category of the transfer.<br><br>Possible values:<br><br>- **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account. |
| `categoryData` | [`TransferCategoryData \| undefined`](../../doc/models/containers/transfer-category-data.md) | Optional | This is a container for one-of cases. |
| `counterparty` | [`CounterpartyV31`](../../doc/models/counterparty-v31.md) | Required | The other party in the transfer. |
| `createdAt` | `string \| undefined` | Optional | The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**. |
| `creationDate` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**. |
| `description` | `string \| undefined` | Optional | Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?** |
| `directDebitInformation` | [`DirectDebitInformation1 \| undefined`](../../doc/models/direct-debit-information-1.md) | Optional | The details of the direct debit. |
| `direction` | [`DirectionEnum \| undefined`](../../doc/models/direction-enum.md) | Optional | The direction of the transfer.<br><br>Possible values: **incoming**, **outgoing**. |
| `executionDate` | [`ExecutionDate1 \| undefined`](../../doc/models/execution-date-1.md) | Optional | Contains information about the date when the transfer will be processed. The execution date must be within 30 days of the current date.<br><br>Until the execution date:<br><br>- The `status` of the transfer remains as **received**.<br>- The `reason` of the transfer remains as **pending**. |
| `id` | `string \| undefined` | Optional | The ID of the resource. |
| `paymentInstrument` | [`PaymentInstrument3 \| undefined`](../../doc/models/payment-instrument-3.md) | Optional | Contains information about the payment instrument used in the transfer. |
| `reason` | [`Reason2Enum \| undefined`](../../doc/models/reason-2-enum.md) | Optional | Additional information about the status of the transfer. |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.<br><br>**Constraints**: *Maximum Length*: `80` |
| `referenceForBeneficiary` | `string \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others. |
| `review` | [`TransferReview1 \| undefined`](../../doc/models/transfer-review-1.md) | Optional | Contains status updates related to additional reviews. |
| `status` | [`Status51Enum`](../../doc/models/status-51-enum.md) | Required | The result of the transfer.<br><br>For example:<br><br>- **received**: an outgoing transfer request is created.<br>- **refused**: the transfer request is rejected by Adyen for one of the following reasons:<br>  - Transfer limit exceeded.<br>  - Transaction rule requirements violated.<br>- **authorised**: the transfer request is authorized and the funds are reserved.<br>- **booked**: the funds are deducted from your user's balance account.<br>- **failed**: the transfer is rejected by the counterparty's bank.<br>- **returned**: the transfer is returned by the counterparty's bank. |
| `type` | [`Type83Enum \| undefined`](../../doc/models/type-83-enum.md) | Optional | The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**. |
| `ultimateParty` | [`UltimatePartyIdentification1 \| undefined`](../../doc/models/ultimate-party-identification-1.md) | Optional | The ultimate sender of the funds of the transfer (ultimate debtor). |

## Example

```ts
import {
  Category3Enum,
  Priority1Enum,
  Status51Enum,
  Transfer,
  Type310Enum,
} from 'adyen';

const transfer: Transfer = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  category: Category3Enum.PlatformPayment,
  counterparty: {
    balanceAccountId: 'balanceAccountId0',
    bankAccount: {
      accountHolder: {
        address: {
          country: 'country0',
          city: 'city6',
          line1: 'line18',
          line2: 'line20',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email6',
        firstName: 'firstName4',
        fullName: 'fullName0',
      },
      accountIdentification: {
        accountNumber: 'accountNumber4',
        bsbCode: 'bsbCode8',
        type: 'type2',
      },
      storedPaymentMethodId: 'storedPaymentMethodId2',
    },
    card: {
      cardHolder: {
        address: {
          country: 'country0',
          city: 'city6',
          line1: 'line18',
          line2: 'line20',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email0',
        firstName: 'firstName8',
        fullName: 'fullName6',
      },
      cardIdentification: {
        expiryMonth: 'expiryMonth2',
        expiryYear: 'expiryYear2',
        issueNumber: 'issueNumber0',
        number: 'number6',
        startMonth: 'startMonth8',
      },
    },
    merchant: {
      acquirerId: 'acquirerId6',
      mcc: 'mcc4',
      merchantId: 'merchantId0',
      nameLocation: {
        city: 'city6',
        country: 'country8',
        countryOfOrigin: 'countryOfOrigin0',
        name: 'name4',
        rawData: 'rawData0',
      },
      postalCode: 'postalCode6',
    },
    transferInstrumentId: 'transferInstrumentId4',
  },
  status: Status51Enum.Booked,
  accountHolder: {
    description: 'description0',
    id: 'id0',
    reference: 'reference4',
  },
  balanceAccount: {
    description: 'description2',
    id: 'id2',
    reference: 'reference2',
  },
  categoryData: {
    priority: Priority1Enum.Instant,
    type: Type310Enum.Bank,
  },
  createdAt: '2016-03-13T12:52:32.123Z',
  creationDate: '2016-03-13T12:52:32.123Z',
};
```

