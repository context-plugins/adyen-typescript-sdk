
# Bank Account V31 Account Identification

## Class Name

`BankAccountV31AccountIdentification`

## Cases

| Type |
|  --- |
| [`AULocalAccountIdentification`](../../../doc/models/au-local-account-identification.md) |
| [`BRLocalAccountIdentification`](../../../doc/models/br-local-account-identification.md) |
| [`CALocalAccountIdentification`](../../../doc/models/ca-local-account-identification.md) |
| [`CZLocalAccountIdentification`](../../../doc/models/cz-local-account-identification.md) |
| [`DKLocalAccountIdentification`](../../../doc/models/dk-local-account-identification.md) |
| [`HKLocalAccountIdentification`](../../../doc/models/hk-local-account-identification.md) |
| [`HULocalAccountIdentification`](../../../doc/models/hu-local-account-identification.md) |
| [`IbanAccountIdentification`](../../../doc/models/iban-account-identification.md) |
| [`NOLocalAccountIdentification`](../../../doc/models/no-local-account-identification.md) |
| [`NZLocalAccountIdentification`](../../../doc/models/nz-local-account-identification.md) |
| [`NumberAndBicAccountIdentification`](../../../doc/models/number-and-bic-account-identification.md) |
| [`PLLocalAccountIdentification`](../../../doc/models/pl-local-account-identification.md) |
| [`SELocalAccountIdentification`](../../../doc/models/se-local-account-identification.md) |
| [`SGLocalAccountIdentification`](../../../doc/models/sg-local-account-identification.md) |
| [`UKLocalAccountIdentification`](../../../doc/models/uk-local-account-identification.md) |
| [`USLocalAccountIdentification`](../../../doc/models/us-local-account-identification.md) |

## AULocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber4',
  bsbCode: 'bsbCode8',
  type: 'auLocal',
};
```

## BRLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber0',
  bankCode: 'bankCode2',
  branchNumber: 'branchNumber2',
  type: 'brLocal',
};
```

## CALocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber8',
  institutionNumber: 'institutionNumber2',
  transitNumber: 'transitNumber8',
  type: 'caLocal',
  accountType: AccountType2Enum.Checking,
};
```

## CZLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber4',
  bankCode: 'bankCode8',
  type: 'czLocal',
};
```

## DKLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber6',
  bankCode: 'bankCode6',
  type: 'dkLocal',
};
```

## HKLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber8',
  clearingCode: 'clearingCode2',
  type: 'hkLocal',
};
```

## HULocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber8',
  type: 'huLocal',
};
```

## IbanAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  iban: 'iban6',
  type: 'iban',
};
```

## NOLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber6',
  type: 'noLocal',
};
```

## NZLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber6',
  type: 'nzLocal',
};
```

## NumberAndBicAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber0',
  bic: 'bic4',
  type: 'numberAndBic',
};
```

## PLLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber4',
  type: 'plLocal',
};
```

## SELocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber0',
  clearingNumber: 'clearingNumber2',
  type: 'seLocal',
};
```

## SGLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber2',
  bic: 'bic2',
  type: Type82Enum.SgLocal,
};
```

## UKLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber8',
  sortCode: 'sortCode8',
  type: 'ukLocal',
};
```

## USLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV31AccountIdentification = {
  accountNumber: 'accountNumber2',
  routingNumber: 'routingNumber2',
  type: 'usLocal',
  accountType: AccountType2Enum.Checking,
};
```

