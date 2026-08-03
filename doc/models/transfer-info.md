
# Transfer Info

*This model accepts additional fields of type unknown.*

## Structure

`TransferInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount** assigned to the balance account, you must specify the [payment instrument ID](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id) of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account. |
| `category` | [`Category3`](../../doc/models/category-3.md) | Required | - |
| `counterparty` | [`CounterpartyInfoV3`](../../doc/models/counterparty-info-v3.md) | Required | - |
| `description` | `string \| undefined` | Optional | Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?**<br><br>**Constraints**: *Maximum Length*: `140` |
| `executionDate` | [`ExecutionDate \| undefined`](../../doc/models/execution-date.md) | Optional | - |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount**, you must specify the payment instrument ID of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account. |
| `priorities` | [`Priority[] \| undefined`](../../doc/models/priority.md) | Optional | The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority you list first. If that's not possible, it moves on to the next option in the order of your provided priorities.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Required for transfers with `category` **bank**. For more details, see [fallback priorities](https://docs.adyen.com/payouts/payout-service/payout-to-users/#fallback-priorities). |
| `priority` | [`Priority \| undefined`](../../doc/models/priority.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.<br><br>**Constraints**: *Maximum Length*: `80` |
| `referenceForBeneficiary` | `string \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others. |
| `review` | [`TransferRequestReview \| undefined`](../../doc/models/transfer-request-review.md) | Optional | - |
| `type` | [`Type112 \| undefined`](../../doc/models/type-112.md) | Optional | - |
| `ultimateParty` | [`UltimatePartyIdentification \| undefined`](../../doc/models/ultimate-party-identification.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Category3, Priority, TransferInfo, Type413 } from 'adyenlib';

const transferInfo: TransferInfo = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  category: Category3.Bank,
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
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email6',
        firstName: 'firstName4',
        fullName: 'fullName0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      accountIdentification: {
        accountNumber: 'accountNumber4',
        bsbCode: 'bsbCode8',
        type: Type413.AuLocal,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      storedPaymentMethodId: 'storedPaymentMethodId2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
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
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email0',
        firstName: 'firstName8',
        fullName: 'fullName6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      cardIdentification: {
        expiryMonth: 'expiryMonth2',
        expiryYear: 'expiryYear2',
        issueNumber: 'issueNumber0',
        number: 'number6',
        startMonth: 'startMonth8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    transferInstrumentId: 'transferInstrumentId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  balanceAccountId: 'balanceAccountId8',
  description: 'description0',
  executionDate: {
    date: '2016-03-13T12:52:32.123Z',
    timezone: 'timezone0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentInstrumentId: 'paymentInstrumentId2',
  priorities: [
    Priority.Instant
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

