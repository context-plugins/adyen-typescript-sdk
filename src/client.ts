import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { anyAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { abortRequestSchema, type AbortRequest } from "./models/abort-request.js";
import { adminRequestSchema, type AdminRequest } from "./models/admin-request.js";
import { adminResponseSchema, type AdminResponse } from "./models/admin-response.js";
import { balanceInquiryRequestSchema, type BalanceInquiryRequest } from "./models/balance-inquiry-request.js";
import {
  balanceInquiryResponseSchema,
  type BalanceInquiryResponse,
} from "./models/balance-inquiry-response.js";
import {
  cardAcquisitionRequestSchema,
  type CardAcquisitionRequest,
} from "./models/card-acquisition-request.js";
import {
  cardAcquisitionResponseSchema,
  type CardAcquisitionResponse,
} from "./models/card-acquisition-response.js";
import {
  cardReaderApduRequestSchema,
  type CardReaderApduRequest,
} from "./models/card-reader-apdu-request.js";
import {
  cardReaderApduResponseSchema,
  type CardReaderApduResponse,
} from "./models/card-reader-apdu-response.js";
import { diagnosisRequestSchema, type DiagnosisRequest } from "./models/diagnosis-request.js";
import { diagnosisResponseSchema, type DiagnosisResponse } from "./models/diagnosis-response.js";
import { displayRequestSchema, type DisplayRequest } from "./models/display-request.js";
import { displayResponseSchema, type DisplayResponse } from "./models/display-response.js";
import { enableServiceRequestSchema, type EnableServiceRequest } from "./models/enable-service-request.js";
import { enableServiceResponseSchema, type EnableServiceResponse } from "./models/enable-service-response.js";
import { getTotalsRequestSchema, type GetTotalsRequest } from "./models/get-totals-request.js";
import { getTotalsResponseSchema, type GetTotalsResponse } from "./models/get-totals-response.js";
import { inputRequestSchema, type InputRequest } from "./models/input-request.js";
import { inputResponseSchema, type InputResponse } from "./models/input-response.js";
import { loginRequestSchema, type LoginRequest } from "./models/login-request.js";
import { loginResponseSchema, type LoginResponse } from "./models/login-response.js";
import { logoutRequestSchema, type LogoutRequest } from "./models/logout-request.js";
import { logoutResponseSchema, type LogoutResponse } from "./models/logout-response.js";
import { paymentRequest2Schema, type PaymentRequest2 } from "./models/payment-request2.js";
import { paymentResponse4Schema, type PaymentResponse4 } from "./models/payment-response4.js";
import { printRequestSchema, type PrintRequest } from "./models/print-request.js";
import { printResponseSchema, type PrintResponse } from "./models/print-response.js";
import { reconciliationRequestSchema, type ReconciliationRequest } from "./models/reconciliation-request.js";
import {
  reconciliationResponseSchema,
  type ReconciliationResponse,
} from "./models/reconciliation-response.js";
import { reversalRequestSchema, type ReversalRequest } from "./models/reversal-request.js";
import { reversalResponseSchema, type ReversalResponse } from "./models/reversal-response.js";
import { storedValueRequestSchema, type StoredValueRequest } from "./models/stored-value-request.js";
import { storedValueResponseSchema, type StoredValueResponse } from "./models/stored-value-response.js";
import {
  transactionStatusRequestSchema,
  type TransactionStatusRequest,
} from "./models/transaction-status-request.js";
import {
  transactionStatusResponseSchema,
  type TransactionStatusResponse,
} from "./models/transaction-status-response.js";
import { AccountCompanyLevel } from "./resources/account-company-level.js";
import { AccountHolders } from "./resources/account-holders.js";
import { AccountMerchantLevel } from "./resources/account-merchant-level.js";
import { AccountStoreLevel } from "./resources/account-store-level.js";
import { AccountVerification } from "./resources/account-verification.js";
import { Accounts } from "./resources/accounts.js";
import { AllowedOriginsCompanyLevel } from "./resources/allowed-origins-company-level.js";
import { AllowedOriginsMerchantLevel } from "./resources/allowed-origins-merchant-level.js";
import { AndroidFilesCompanyLevel } from "./resources/android-files-company-level.js";
import { ApiCredentialsCompanyLevel } from "./resources/api-credentials-company-level.js";
import { ApiCredentialsMerchantLevel } from "./resources/api-credentials-merchant-level.js";
import { ApiKeyCompanyLevel } from "./resources/api-key-company-level.js";
import { ApiKeyMerchantLevel } from "./resources/api-key-merchant-level.js";
import { AuthorizedCardUsers } from "./resources/authorized-card-users.js";
import { BalanceAccounts } from "./resources/balance-accounts.js";
import { BalanceTransfers } from "./resources/balance-transfers.js";
import { BalancesOverview } from "./resources/balances-overview.js";
import { Balances } from "./resources/balances.js";
import { BankAccountValidation } from "./resources/bank-account-validation.js";
import { BusinessLinesApi } from "./resources/business-lines-api.js";
import { Capital } from "./resources/capital.js";
import { CardOrders } from "./resources/card-orders.js";
import { CashOutApi } from "./resources/cash-out-api.js";
import { ClientKeyCompanyLevel } from "./resources/client-key-company-level.js";
import { ClientKeyMerchantLevel } from "./resources/client-key-merchant-level.js";
import { CustomPayoutSchedulesSweeps } from "./resources/custom-payout-schedules-sweeps.js";
import { DirectDebitMandates } from "./resources/direct-debit-mandates.js";
import { DisputeAttachments } from "./resources/dispute-attachments.js";
import { Documents } from "./resources/documents.js";
import { DonationCampaigns } from "./resources/donation-campaigns.js";
import { Donations } from "./resources/donations.js";
import { DynamicOffers } from "./resources/dynamic-offers.js";
import { General } from "./resources/general.js";
import { GrantAccounts } from "./resources/grant-accounts.js";
import { GrantOffersApi } from "./resources/grant-offers-api.js";
import { GrantsApi } from "./resources/grants-api.js";
import { HostedOnboardingPage } from "./resources/hosted-onboarding-page.js";
import { HostedOnboarding } from "./resources/hosted-onboarding.js";
import { IDealProfiles } from "./resources/ideal-profiles.js";
import { Initialization } from "./resources/initialization.js";
import { InstantPayouts } from "./resources/instant-payouts.js";
import { LegalEntities } from "./resources/legal-entities.js";
import { ManageCardPin } from "./resources/manage-card-pin.js";
import { ManageScaDevices } from "./resources/manage-sca-devices.js";
import { ManagedPayoutSchedules } from "./resources/managed-payout-schedules.js";
import { Modifications } from "./resources/modifications.js";
import { MyApiCredential } from "./resources/my-api-credential.js";
import { NetworkTokens } from "./resources/network-tokens.js";
import { Orders } from "./resources/orders.js";
import { PaymentInstrumentGroups } from "./resources/payment-instrument-groups.js";
import { PaymentInstruments } from "./resources/payment-instruments.js";
import { PaymentLinks } from "./resources/payment-links.js";
import { PaymentMethodsMerchantLevel } from "./resources/payment-methods-merchant-level.js";
import { PaymentsApp } from "./resources/payments-app.js";
import { Payments } from "./resources/payments.js";
import { PayoutSettingsMerchantLevel } from "./resources/payout-settings-merchant-level.js";
import { PciComplianceQuestionnairePage } from "./resources/pci-compliance-questionnaire-page.js";
import { PciQuestionnaires } from "./resources/pci-questionnaires.js";
import { Platform } from "./resources/platform.js";
import { RaiseDisputes } from "./resources/raise-disputes.js";
import { Rates } from "./resources/rates.js";
import { RecurringApi } from "./resources/recurring-api.js";
import { RecurringTopUps } from "./resources/recurring-top-ups.js";
import { Reviewing } from "./resources/reviewing.js";
import { ScaAssociationManagement } from "./resources/sca-association-management.js";
import { ScaDeviceManagement } from "./resources/sca-device-management.js";
import { SessionAuthentication } from "./resources/session-authentication.js";
import { SplitConfigurationMerchantLevel } from "./resources/split-configuration-merchant-level.js";
import { TaxEDeliveryConsent } from "./resources/tax-edelivery-consent.js";
import { TerminalActionsCompanyLevel } from "./resources/terminal-actions-company-level.js";
import { TerminalActionsTerminalLevel } from "./resources/terminal-actions-terminal-level.js";
import { TerminalOrdersCompanyLevel } from "./resources/terminal-orders-company-level.js";
import { TerminalOrdersMerchantLevel } from "./resources/terminal-orders-merchant-level.js";
import { TerminalSettingsCompanyLevel } from "./resources/terminal-settings-company-level.js";
import { TerminalSettingsMerchantLevel } from "./resources/terminal-settings-merchant-level.js";
import { TerminalSettingsStoreLevel } from "./resources/terminal-settings-store-level.js";
import { TerminalSettingsTerminalLevel } from "./resources/terminal-settings-terminal-level.js";
import { TerminalsTerminalLevel } from "./resources/terminals-terminal-level.js";
import { TermsOfService } from "./resources/terms-of-service.js";
import { TransactionRules } from "./resources/transaction-rules.js";
import { Transactions } from "./resources/transactions.js";
import { TransferInstruments } from "./resources/transfer-instruments.js";
import { TransferLimitsBalanceAccountLevel } from "./resources/transfer-limits-balance-account-level.js";
import { TransferLimitsBalancePlatformLevel } from "./resources/transfer-limits-balance-platform-level.js";
import { TransferRoutes } from "./resources/transfer-routes.js";
import { Transfers } from "./resources/transfers.js";
import { UsersCompanyLevel } from "./resources/users-company-level.js";
import { UsersMerchantLevel } from "./resources/users-merchant-level.js";
import { Utility } from "./resources/utility.js";
import { Verification } from "./resources/verification.js";
import { WebhooksCompanyLevel } from "./resources/webhooks-company-level.js";
import { WebhooksMerchantLevel } from "./resources/webhooks-merchant-level.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments.
 * You can use the same integration for payments made with cards (including 3D Secure), mobile
 * wallets, and local payment methods (for example, iDEAL and Sofort).
 *
 * This API reference provides information on available endpoints and how to interact with them. To
 * learn more about the API, visit [online payments
 * documentation](https://docs.adyen.com/online-payments).
 *
 * ## Authentication
 * Each request to Checkout API must be signed with an API key. For this, [get your API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) from your
 * Customer Area, and set this key to the `X-API-Key` header value, for example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 * ## Versioning
 * Checkout API supports [versioning](https://docs.adyen.com/development-resources/versioning) using
 * a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is
 * the version number.
 *
 * For example:
 * ```
 * https://checkout-test.adyen.com/v72/payments
 * ```
 *
 * ## Server-side API libraries
 * We provide open-source [server-side API
 * libraries](https://docs.adyen.com/development-resources/libraries/) in several languages:
 * - PHP
 * - Java
 * - Node.js
 * - .NET
 * - Go
 * - Python
 * - Ruby
 * - Apex (beta)
 *
 * See our [integration
 * examples](https://github.com/adyen-examples#%EF%B8%8F-official-integration-examples) for example
 * uses of the libraries.
 *
 * ## Developer resources
 * Checkout API is available through a Postman collection. Click the button below to create a fork,
 * then set the environment variables at **Environments**&nbsp;>&nbsp;**Adyen&nbsp;APIs**.
 *
 * [![Run in
 * Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25716737-46ad970e-dc9e-4246-bac2-769c6083e7b5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25716737-46ad970e-dc9e-4246-bac2-769c6083e7b5%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e#?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
 *
 *
 * ## Going live
 *
 * To access the live endpoints, you need an API key from your live Customer Area.
 *
 * The live endpoint URLs contain a prefix which is unique to your company account, for example:
 * ```
 * https://{PREFIX}-checkout-live.adyenpayments.com/checkout/v72/payments
 * ```
 *
 * Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** >
 * **Prefix**.
 *
 * When preparing to do live transactions with Checkout API, follow the [go-live
 * checklist](https://docs.adyen.com/online-payments/go-live-checklist) to make sure you've got all
 * the required configuration in place.
 *
 * ## Release notes
 * Have a look at the [release
 * notes](https://docs.adyen.com/online-payments/release-notes?integration_type=api&version=72) to
 * find out what changed in this version!, A set of API endpoints that allow you to initiate,
 * settle, and modify payments on the Adyen payments platform. You can use the API to accept card
 * payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment
 * methods.
 *
 * > This API is
 * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle).
 * > * If you are building a new integration, use the [Checkout
 * API](https://docs.adyen.com/api-explorer/Checkout/latest/overview) instead. > * If you have an
 * existing integration using this API, reach out to your Adyen contact and [migrate to the Checkout
 * API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).
 * >The Checkout API enables your [online payments](https://docs.adyen.com/online-payments)
 * integration to accept all supported payment methods, use the latest features, and access more
 * benefits.
 *
 * To learn more about the API, visit [Classic
 * integration](https://docs.adyen.com/classic-integration).
 *
 * ## Authentication
 * You need an [API credential](https://docs.adyen.com/development-resources/api-credentials) to
 * authenticate to the API.
 *
 * If using an API key, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication, for example:
 *
 * ```
 * curl
 * -u "ws@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 *
 * ## Versioning
 * Payments API supports [versioning](https://docs.adyen.com/development-resources/versioning) using
 * a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is
 * the version number.
 *
 * For example:
 * ```
 * https://pal-test.adyen.com/pal/servlet/Payment/v68/authorise
 * ```
 *
 * ## Going live
 *
 * To authenticate to the live endpoints, you need an [API
 * credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer
 * Area.
 *
 * The live endpoint URLs contain a prefix which is unique to your company account:
 * ```
 *
 * https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Payment/v68/authorise
 * ```
 *
 * Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** >
 * **Prefix**., > The Recurring API is a legacy API for managing tokens. We strongly recommend to
 * use [Checkout API recurring
 * endpoints](https://docs.adyen.com/api-explorer/Checkout/71/post/storedPaymentMethods) instead
 * when possible.
 *
 * The Recurring API allows you to manage and remove your tokens or stored payment details. Tokens
 * should be created with validation during a payment request.
 *
 * For more information, refer to our [Tokenization
 * documentation](https://docs.adyen.com/online-payments/tokenization).
 * ## Authentication
 * You need an [API credential](https://docs.adyen.com/development-resources/api-credentials) to
 * authenticate to the API.
 *
 * If using an API key, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication, for example:
 *
 * ```
 * curl
 * -u "ws@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 *
 * ## Versioning
 * Recurring API supports [versioning](https://docs.adyen.com/development-resources/versioning)
 * using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX
 * is the version number.
 *
 * For example:
 * ```
 * https://pal-test.adyen.com/pal/servlet/Recurring/v68/disable
 * ```
 *
 * ## Server-side API libraries
 * We provide open-source [server-side API
 * libraries](https://docs.adyen.com/development-resources/libraries/) in several languages:
 * - PHP
 * - Java
 * - Node.js
 * - .NET
 * - Go
 * - Python
 * - Ruby
 * - Apex (beta)
 *
 * See our [integration
 * examples](https://github.com/adyen-examples#%EF%B8%8F-official-integration-examples) for example
 * uses of the libraries.
 *
 * ## Developer resources
 * Recurring API is available through a Postman collection. Click the button below to create a fork,
 * then set the environment variables at **Environments**&nbsp;>&nbsp;**Adyen&nbsp;APIs**.
 *
 * [![Run in
 * Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25716737-0d1ef0da-f5a1-4004-b24a-c5152c51dc7b?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25716737-0d1ef0da-f5a1-4004-b24a-c5152c51dc7b%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e#?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
 *
 *
 * ## Going live
 *
 * To authenticate to the live endpoints, you need an [API
 * credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer
 * Area.
 *
 * The live endpoint URLs contain a prefix which is unique to your company account:
 * ```
 *
 * https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Recurring/v68/disable
 * ```
 *
 * Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** >
 * **Prefix**., > The **Payout API is deprecated** and no longer supports new integrations. Do one
 * of the following: >- If you are building a new integration, use the [Transfers
 * API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead. > - If you are
 * already using the Payout API, reach out to your Adyen contact to learn how to migrate to the
 * Transfers API. > > With the Transfers API, you can: > - Handle multiple payout use cases with a
 * single API. > - Use new payout functionalities, such as instant payouts to bank accounts. > -
 * Receive webhooks with more details and defined transfer states. > > For more information about
 * the payout features of the Transfers API, see our
 * [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.
 *
 *
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.
 *
 * For more information, refer to [Online
 * payouts](https://docs.adyen.com/online-payments/online-payouts).
 * ## Authentication
 * To use the Payout API, you need to have [two API
 * credentials](https://docs.adyen.com/online-payments/online-payouts#payouts-to-bank-accounts-and-wallets):
 * one for storing payout details and submitting payouts, and another one for confirming or
 * declining payouts. If you don't have the required API credentials, contact our [Support
 * Team](https://www.adyen.help/hc/en-us/requests/new).
 *
 * If using an API key, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using [basic
 * authentication](https://docs.adyen.com/development-resources/api-credentials#basic-authentication).
 *
 * The following example shows how to authenticate your request with basic authentication when
 * submitting a payout:
 *
 * ```
 * curl
 * -u "storePayout@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 *
 * ## Versioning
 * Payout API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a
 * version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the
 * version number.
 *
 * For example:
 * ```
 * https://pal-test.adyen.com/pal/servlet/Payout/v68/payout
 * ```
 *
 * ## Going live
 *
 * To authenticate to the live endpoints, you need [API
 * credentials](https://docs.adyen.com/development-resources/api-credentials) from your live
 * Customer Area.
 *
 * The live endpoint URLs contain a prefix which is unique to your company account:
 * ```
 *
 * https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Payout/v68/payout
 * ```
 *
 * Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** >
 * **Prefix**., The BIN Lookup API provides endpoints for retrieving information, such as cost
 * estimates, and 3D Secure supported version based on a given BIN.
 *
 * ## Authentication
 * You need an [API credential](https://docs.adyen.com/development-resources/api-credentials) to
 * authenticate to the API.
 *
 * If using an API key, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication, for example:
 *
 * ```
 * curl
 * -u "ws@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 *
 * ## Versioning
 * The BinLookup API supports [versioning](https://docs.adyen.com/development-resources/versioning)
 * using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX
 * is the version number.
 *
 * For example:
 * ```
 * https://pal-test.adyen.com/pal/servlet/BinLookup/v54/get3dsAvailability
 * ```
 *
 * ## Going live
 *
 * To authenticate to the live endpoints, you need an [API
 * credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer
 * Area.
 *
 * The live endpoint URLs contain a prefix which is unique to your company account:
 * ```
 *
 * https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/BinLookup/v54/get3dsAvailability
 * ```
 *
 * Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** >
 * **Prefix**., A set of API endpoints to manage stored value products., Adyen Data Protection API
 * provides a way for you to process [Subject Erasure Requests](https://gdpr-info.eu/art-17-gdpr/)
 * as mandated in GDPR.
 *
 * Use our API to submit a request to delete shopper's data, including payment details and other
 * related information (for example, delivery address or shopper email).## Authentication Each
 * request to the Data Protection API must be signed with an API key. Get your API Key from your
 * Customer Area, as described in [How to get the API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set
 * this key to the `X-API-Key` header value, for example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: Your_API_key" \
 * ...
 * ```
 * Note that when going live, you need to generate a new API Key to access the [live
 * endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * Data Protection Service API supports
 * [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in
 * the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://ca-test.adyen.com/ca/services/DataProtectionService/v1/requestSubjectErasure
 * ```, The Foreign Exchange API allows you to manage and convert the currencies that are enabled for your integration.
 * ## Authentication
 * We recommend that you use an API key to connect to the Foreign Exchange API. You can generate an
 * API key in your Customer Area. If you have an Adyen Issuing integration, generate an API key in
 * your Balance Platform Customer Area.
 * ### Credential format
 * * For the `rates/calculate` endpoint: Generate an API key for the credential with the format
 *   **ws@BalancePlatform.[YourBalancePlatform]**.
 *
 * ### Header format
 * To connect to the Foreign Exchange API, add an `X-API-Key` header with the API key as the value,
 * for example:
 *
 *  ```
 * curl
 * -H 'Content-Type: application/json' \
 * -H 'X-API-Key: ADYEN_API_KEY' \
 * ...
 * ```
 *
 * ## Versioning
 *
 * The Foreign Exchange API supports
 * [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in
 * the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 *
 * https://balanceplatform-api-test.adyen.com/fx/v1/rates/calculate
 *
 * ## Going live
 * When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/).
 * If you have an Adyen Issuing integration, [generate an API
 * key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key)
 * in your [live Balance Platform Customer
 * Area](https://balanceplatform-live.adyen.com/balanceplatform/). You can then use the API key to
 * send requests to `https://balanceplatform-api-test.adyen.com/fx/v1`., The Test Cards API provides
 * endpoints for generating custom test card numbers. For more information, refer to [Custom test
 * cards](https://docs.adyen.com/development-resources/testing/create-test-cards) documentation.,
 * Configure and manage your Adyen company and merchant accounts, stores, and payment terminals.
 * ## Authentication
 * Each request to the Management API must be signed with an API key. [Generate your API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the
 * Customer Area and then set this key to the `X-API-Key` header value.
 *
 * To access the live endpoints, you need to generate a new API key in your live Customer Area.
 * ## Versioning
 *
 * Management API handles versioning as part of the endpoint URL. For example, to send a request to
 * this version of the `/companies/{companyId}/webhooks` endpoint, use:
 *
 * ```text
 * https://management-test.adyen.com/v3/companies/{companyId}/webhooks
 * ```
 *
 * ## Going live
 *
 * To access the live endpoints, you need an API key from your live Customer Area. Use this API key
 * to make requests to:
 *
 * ```text
 * https://management-live.adyen.com/v3
 * ```
 *
 * ## Release notes
 * Have a look at the [release notes](https://docs.adyen.com/release-notes/management-api) to find
 * out what changed in this version!, This API is used for the classic integration. If you are just
 * starting your implementation, refer to our [new integration
 * guide](https://docs.adyen.com/adyen-for-platforms-model) instead.
 *
 * The Account API provides endpoints for managing account-related entities on your platform. These
 * related entities include account holders, accounts, bank accounts, shareholders, and
 * verification-related documents. The management operations include actions such as creation,
 * retrieval, updating, and deletion of them.
 *
 * For more information, refer to our [documentation](https://docs.adyen.com/classic-platforms).
 * ## Authentication
 * Your Adyen contact will provide your API credential and an API key. To connect to the API, add an
 * `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication. For example:
 *
 * ```
 * curl
 * -U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * When going live, you need to generate new web service user credentials to access the [live
 * endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Account API supports [versioning](https://docs.adyen.com/development-resources/versioning)
 * using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX
 * is the version number.
 *
 * For example:
 * ```
 * https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder
 * ```, The Balance Control API allows you to view and manage the balances in your company and merchant accounts.
 * ## Authentication
 * We recommend that you use an API key to connect to the Balance Control API. You can [generate an
 * API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in your
 * Customer Area.
 * ### Header format
 * To connect to the Balance Control API, add an `X-API-Key` header with the API key as the value.
 * For example:
 *
 *  ```
 * curl
 * -H 'Content-Type: application/json' \
 * -H 'X-API-Key: ADYEN_API_KEY' \
 * ...
 * ```
 *
 * ## Versioning
 *
 * The Balance Control API handles versioning as part of the endpoint URL. For example, to send a
 * request to version 2 of the `/balanceOverview/companies/{companyId}/balances` endpoint, use:
 *
 * https://balance-control-test.adyen.com/balance-control/api/v2/balanceOverview/companies/{companyId}/balances
 *
 * ## Going live
 * When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/).
 * You can then use the API key to send requests to
 * `https://balance-control-live.adyen.com/api/v2`., This API is used for the classic integration.
 * If you are just starting your implementation, refer to our [new integration
 * guide](https://docs.adyen.com/adyen-for-platforms-model) instead.
 *
 * The Notification Configuration API provides endpoints for setting up and testing notifications
 * that inform you of events on your platform, for example when a verification check or a payout has
 * been completed.
 *
 * For more information, refer to our
 * [documentation](https://docs.adyen.com/classic-platforms/notifications).
 * ## Authentication
 * Your Adyen contact will provide your API credential and an API key. To connect to the API, add an
 * `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication. For example:
 *
 * ```
 * curl
 * -U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * When going live, you need to generate new web service user credentials to access the [live
 * endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Notification Configuration API supports
 * [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in
 * the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://cal-test.adyen.com/cal/services/Notification/v6/createNotificationConfiguration
 * ```, The Configuration API allows you to manage your balance platform where you can create account holders, balance accounts, cards, and business accounts.
 *
 * ## Authentication
 * Each request to the Configuration API must be signed with an API key. Generate an API key in your
 * Customer Area if you have a [platform
 * setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key)
 * or [marketplace
 * setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key).
 *
 * If you have an Adyen Issuing integration, [generate an API
 * key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key)
 * in your Balance Platform Customer Area.
 *
 * To connect to the API, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * ## Versioning
 * The Configuration API supports
 * [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in
 * the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders
 * ```
 * ## Going live
 * When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/)
 * if you have an Adyen for Platforms integration or [live Balance Platform Customer
 * Area](https://balanceplatform-live.adyen.com/balanceplatform/) if you have an Adyen Issuing
 * integration.You can then use the API key to send requests to
 * `https://balanceplatform-api-live.adyen.com/bcl/v2`., >Versions 1 and 2 of the Transfers API are
 * deprecated. If you are just starting your implementation, use the latest version.
 *
 * The Transfers API provides endpoints that you can use to transfer funds, whether when paying out
 * to a transfer instrument for
 * [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/on-demand-payouts) or
 * [platforms](https://docs.adyen.com/platforms/payout-to-users/on-demand-payouts), [sending funds
 * to third parties](https://docs.adyen.com/platforms/business-accounts/send-receive-funds) for
 * users with business bank accounts, or to [request a payout for a grant
 * offer](https://docs.adyen.com/platforms/capital). The API also supports use cases for [getting
 * transactions for business bank
 * accounts](https://docs.adyen.com/platforms/business-accounts/transactions-api) and getting
 * [outstanding balances](https://docs.adyen.com/platforms/capital#get-balances) for one or more
 * grants on your platform.
 *
 * ## Authentication
 * Each request to the Transfers API must be signed with an API key. Generate an API key in your
 * Customer Area if you have a [platform
 * setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key)
 * or [marketplace
 * setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key).
 *
 * If you have an Adyen Issuing integration, [generate an API
 * key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key)
 * in your Balance Platform Customer Area.
 *
 * To connect to the API, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * ## Roles and permissions
 * To use the Transfers API, you need an additional role for your API credential. Transfers must
 * also be enabled for the source balance account. Your Adyen contact will set up the roles and
 * permissions for you.
 * ## Versioning
 * The Transfers API supports [versioning](https://docs.adyen.com/development-resources/versioning)
 * using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX
 * is the version number.
 *
 * For example:
 * ```
 * https://balanceplatform-api-test.adyen.com/btl/v4/transfers
 * ```
 * ## Going live
 * When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/)
 * if you have an Adyen for Platforms integration or [live Balance Platform Customer
 * Area](https://balanceplatform-live.adyen.com/balanceplatform/) if you have an Adyen Issuing
 * integration. You can then use the API key to send requests to
 * `https://balanceplatform-api-live.adyen.com/btl/v4`., The Capital API provides endpoints for
 * embedding [Adyen Capital](https://docs.adyen.com/capital) into your marketplace or platform. With
 * Capital, you can offer business financing to your users as grants. When a user receives a grant,
 * they must repay the grant amount in a specified term, in addition to paying a fee for using this
 * service.
 *
 * With these endpoints, you can:
 * - **Get available financing offers**: You can get a list of offers with fixed amounts or a range
 *   of available financing for your users. Adyen configures the financing amount, the fee, and the
 *   repayment conditions for each offer. These configurations are based on proactive risk analyses
 *   that Adyen performs on your users.
 * - **Make requests for grants**: When a user selects a financing offer, you can make a request for
 *   the grant on their behalf.
 * - **Get information about your grant account**: Your grant account tracks the information of all
 *   grants in your marketplace or platform.
 *
 * ## Authentication
 * Each request made to the Capital API must be signed with an API key. Generate an API key in your
 * Customer Area.
 *
 * To connect to the API, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * ## Roles and permissions
 * To use the Capital API, your API credential must have the following roles:
 * - **Balance_Platform_Capital_Configuration_Role**
 * - **Balance_Platform_Capital_Grant_Initiation_Role**
 *
 * Reach out to your Adyen contact to set up these roles.
 * ## Going live
 * When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca).
 * You can then use the API key to send requests to
 * `https://balanceplatform-api-live.adyen.com/capital/v{version}`., This API is used for the
 * classic integration. If you are just starting your implementation, refer to our [new integration
 * guide](https://docs.adyen.com/adyen-for-platforms-model) instead.
 *
 * The Fund API provides endpoints for managing the funds in the accounts on your platform. These
 * management operations include, for example, the transfer of funds from one account to another,
 * the payout of funds to an account holder, and the retrieval of balances in an account.
 *
 * For more information, refer to our [documentation](https://docs.adyen.com/classic-platforms).
 * ## Authentication
 * Your Adyen contact will provide your API credential and an API key. To connect to the API, add an
 * `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication. For example:
 *
 * ```
 * curl
 * -U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * When going live, you need to generate new web service user credentials to access the [live
 * endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Fund API supports [versioning](https://docs.adyen.com/development-resources/versioning) using
 * a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is
 * the version number.
 *
 * For example:
 * ```
 * https://cal-test.adyen.com/cal/services/Fund/v6/accountHolderBalance
 * ```, The Session authentication API enables you to create and manage the JSON Web Tokens (JWT) required for integrating [components](https://docs.adyen.com/platforms/components-overview).
 * ## Authentication
 * We recommend that you use an API key to connect to the Session authentication API. Generate an
 * API key in your Customer Area if you have a [platform
 * setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key)
 * or [marketplace
 * setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key).
 * If you have an Adyen Issuing integration, [generate an API
 * key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key)
 * in your Balance Platform Customer Area.
 *
 * To connect to the Session authentication API, add an `X-API-Key` header with the API key as the
 * value, for example:
 *
 *  ```
 * curl
 * -H 'Content-Type: application/json' \
 * -H 'X-API-Key: YOUR_API_KEY' \
 * ...
 * ```
 *
 * ## Roles and permissions
 * To create a token, you must meet specific requirements. These requirements vary depending on the
 * type of component. For more information, see the documentation for
 * [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform
 * Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.
 *
 * ## Going live
 * To access the live endpoint, generate an API key in your live Customer Area if you have a
 * [platform](https://docs.adyen.com/platforms/) or [marketplace
 * setup](https://docs.adyen.com/marketplaces/). If you have an Adyen Issuing integration, [generate
 * an API
 * key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key)
 * in your Balance Platform Customer Area. You can then use the API key to send requests to
 * `https://authe-live.adyen.com/authe/api/v1`., The Legal Entity Management API enables you to
 * manage legal entities that contain information required for verification.
 *
 * ## Authentication
 * Each request to the Legal Entity Management API must be signed with an API key. Generate an API
 * key in your Customer Area if you have a [platform
 * setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key)
 * or [marketplace
 * setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key).
 *
 * If you have an Adyen Issuing integration, [generate an API
 * key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key)
 * in your Balance Platform Customer Area.
 *
 * To connect to the API, add an `X-API-Key` header with the API key as the value. For example:
 *
 * ```
 * curl
 * -H "X-API-Key: YOUR_API_KEY" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * ## Versioning
 * The Legal Entity Management API supports
 * [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in
 * the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://kyc-test.adyen.com/lem/v4/legalEntities
 * ```
 * ## Rate limits
 * We enforce rate limits on Legal Entity Management API endpoints. When the number of requests you
 * send exceeds a threshold within a time frame, additional requests are blocked until the time
 * frame ends. Current limits:
 *
 * - Live environments: 700 requests per 5 seconds.
 *
 * - Test environments: 200 requests per 5 seconds.
 *
 * - Failed requests are subject to a limit of 5 failures per 10 seconds.
 *
 * ## Going live
 * When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/)
 * if you have an Adyen for Platforms integration or [live Balance Platform Customer
 * Area](https://balanceplatform-live.adyen.com/balanceplatform/) if you have an Adyen Issuing
 * integration.You can then use the API key to send requests to
 * `https://kyc-live.adyen.com/lem/v4`., This API is used for the classic integration. If you are
 * just starting your implementation, refer to our [new integration
 * guide](https://docs.adyen.com/adyen-for-platforms-model) instead.
 *
 * The Hosted onboarding API provides endpoints that you can use to generate links to Adyen-hosted
 * pages, such as an [onboarding
 * page](https://docs.adyen.com/classic-platforms/hosted-onboarding-page) or a [PCI compliance
 * questionnaire](https://docs.adyen.com/classic-platforms/platforms-for-partners). You can provide
 * these links to your account holders so that they can complete their onboarding.
 *
 * ## Authentication
 * Your Adyen contact will provide your API credential and an API key. To connect to the API, add an
 * `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication. For example:
 *
 * ```
 * curl
 * -U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * When going live, you need to generate new web service user credentials to access the [live
 * endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Hosted onboarding API supports
 * [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in
 * the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://cal-test.adyen.com/cal/services/Hop/v6/getOnboardingUrl
 * ```, The A2A payments API provides endpoints for A2A payment flows, enabling issuers to facilitate direct payments through Adyen for users with an Adyen business account.
 *
 * With these endpoints, you can:
 * - **Retrieve payment details**: Retrieve transaction information for specific payments.
 * - **Confirm payments**: Confirm payments with Strong Customer Authentication (SCA).
 * - **Cancel payments**: Cancel pending transactions.
 *
 * ## Authentication
 * Each request made to the A2A Payments API must be signed with an API key. Generate an API key in
 * your Customer Area.
 *
 * To connect to the API, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * ## Roles and permissions
 * To use the A2A Payments API, your API credential must have the following roles:
 * - **Role for A2A Issuer payments - API**
 *
 * Reach out to your Adyen contact to set up these roles.
 * ## Going live
 * When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca).
 * You can then use the API key to send requests to
 * `https://balanceplatform-api-live.adyen.com/a2aissuer-api/v{version}/payments`., The Open Banking
 * API provides secure endpoints to share financial data and services with third parties. This API
 * offers quick and reliable user verification.
 *
 * With these endpoints, you can:
 *
 * - **Create a list of available account verification routes**: Create a list of Account
 *   Information Service Providers (AISPs) for third-party individual account verification.
 *   Successful connections generate a unique code used for requesting bank reports and verifying
 *   identity.
 * - **Verify bank account ownership**: Get the account verification report using the unique code
 *   from a successful open banking connection. This report provides identity verification and bank
 *   account details.
 * ## Authentication
 * Each request made to the Open Banking API must be signed with an API key. Generate an API key in
 * your Customer Area.
 *
 * To connect to the API, add an X-API-Keyheader with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json"
 * -H "X-API-Key: YOUR_API_KEY"
 * ...
 * ```
 *
 * ## Roles and permissions
 * To use the Open Banking API, your API credential must have the following roles:
 * - **Role for OpenBanking account verification use case: EXTERNAL**
 *
 * Reach out to your Adyen contact to set up these roles., You can use the [Disputes
 * API](https://docs.adyen.com/risk-management/disputes-api) to automate the dispute handling
 * process so that you can respond to disputes and chargebacks as soon as they are initiated. The
 * Disputes API lets you retrieve defense reasons, supply and delete defense documents, and accept
 * or defend disputes.
 *
 * ## Authentication
 * Each request to the Disputes API must be signed with an API key. For this, obtain an API Key from
 * your Customer Area, as described in [How to get the API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set
 * this key to the `X-API-Key` header value, for example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: Your_API_key" \
 * ...
 * ```
 * Note that when going live, you need to generate new web service user credentials to access the
 * [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * Disputes API supports [versioning](https://docs.adyen.com/development-resources/versioning) using
 * a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is
 * the version number.
 *
 * For example:
 * ```
 * https://ca-test.adyen.com/ca/services/DisputeService/v30/defendDispute
 * ```, Disputes API for Issuing that you can use to raise disputes on transactions made with an Adyen-issued card, or to report instances of fraud. You can also add attachments as supporting information for a raised dispute, update information about the dispute, submit the dispute for a chargeback, or close the dispute.
 *
 * ## Authentication
 * Your Adyen contact will provide your API credential and an API key. To connect to the API, add an
 * `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic
 * authentication. For example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -U "ws@BalancePlatform.YOUR_BALANCE_PLATFORM":"YOUR_WS_PASSWORD" \
 * ...
 * ```
 * ## Roles and permissions
 * To use the Disputes API, you need an additional role for your API credential. Your Adyen contact
 * will set up the roles and permissions for you.
 * ## Versioning
 * The Disputes API supports [versioning](https://docs.adyen.com/development-resources/versioning)
 * using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX
 * is the version number.
 *
 * For example:
 * ```
 * https://balanceplatform-api-test.adyen.com/btl/api/v{version}/disputes
 * ```
 * ## Going live
 * When going live, your Adyen contact will provide your API credential for the live environment.
 * You can then use the username and password to send requests to
 * `https://balanceplatform-api-live.adyen.com/btl/api/v{version}`., The Adyen [Terminal
 * API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) lets you make
 * payments, issue refunds, collect shopper information, and perform other shopper-device
 * interactions using a payment terminal supplied by Adyen. The Terminal API is also used for
 * transactions in [Adyen Mobile solutions](https://docs.adyen.com/point-of-sale/ipp-mobile/).
 *
 * ## API structure
 * The architecture of Terminal API is determined by the [nexo Sale to POI Protocol
 * Specifications](https://www.nexo-standards.org/standards/nexo-retailer-protocol).
 *
 * A Terminal API request is a JSON message consisting of a `SaleToPOIRequest` object with:
 * -
 *   [`MessageHeader`](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#request-message-header):
 *   identifies the type of transaction, the terminal or Mobile SDK instance being used, and unique
 *   transaction identifiers.
 * - **Request body**: content depending on the type of transaction or operation, for example, a
 *   `PaymentRequest`.
 *
 * A Terminal API response is a JSON message consisting of a `SaletoPOIResponse`with:
 * *
 *   [`MessageHeader`](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/#response-message-header):
 *   echoes the values provided in the request, except for `MessageType`, which is always
 *   **Response**.
 * * Response body: content depending on the type of transaction or operation, for example, a
 *   `PaymentResponse`.
 *
 * ## Sending and receiving
 * In an integration with Ayden payment terminals, you can send and receive Terminal API messages in
 * the following ways:
 * - [Local
 *   communications](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/local/):
 *   using your local network, your POS system sends the request directly to the IP address of the
 *   terminal, and receives the result synchronously.
 * - [Cloud
 *   communications](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/):
 *   using the internet to access the cloud, your POS system sends the request to an Adyen endpoint,
 *   and Adyen forwards the request to the terminal. Your POS system either keeps the connection
 *   open and receives the response synchronously, or closes the connection and receives the
 *   response asynchronously in an event notification.
 *
 * ## Using local communications
 * To learn how to set up and protect local communications, refer to [Building a local
 * integration](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/local/).
 *
 * ## Endpoints for cloud communications
 * If your POS system is cloud-based, you POST your Terminal API requests to a **Cloud device API**
 * endpoint, using path and query parameters to identify the device that you want to send the
 * request to.
 * - If your POS system is designed to keep the connection open to wait for the response, use the
 *   endpoints ending in `/sync`.
 * - If your POS system is designed to close the connection so that it can initiate a new request,
 *   use the endpoints ending in `/async`.
 *
 * ### Test endpoints
 * - `https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/sync`
 * - `https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/async`
 *
 * ### Live endpoints
 * The live endpoints differ per region. In addition to using a regional endpoint, you must select
 * the geographically closest data center in your live Customer Area.
 *
 * **Australia**
 * - `https://device-api-live-au.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
 * - `https://device-api-live-au.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`
 *
 * **East Asia**
 * - `https://device-api-live-apse.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
 * - `https://device-api-live-apse.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`
 *
 * **Europe**
 * - `https://device-api-live.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
 * - `https://device-api-live.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`
 *
 * **United States**
 * - `https://device-api-live-us.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/sync`
 * - `https://device-api-live-us.adyen.com/v1/merchants/{merchantId}/devices/{deviceId}/async`
 *
 *  ### Old endpoints
 * If you currently use endpoints with a base URL that includes `terminal-api`, we strongly
 * recommend migrating to Cloud device API endpoints, for the following reasons:
 * - When using Cloud device API, the API logs in the Customer Area include the Terminal API
 *   requests and responses.
 * - Cloud device API endpoints offer technical advantages such as versioning and better routing.
 * - Future enhancements and features will be based on Cloud device API.
 *
 * There will be no future development on the old endpoints, but we continue to support them.
 *
 * **Old test endpoints**:
 * - `https://terminal-api-test.adyen.com/sync` and `https://terminal-api-test.adyen.com/async`
 *
 * **Old live endpoints Australia**:
 * - `https://terminal-api-live-au.adyen.com/sync` and
 *   `https://terminal-api-live-au.adyen.com/async`
 *
 * **Old live endpoints East Asia**:
 * - `https://terminal-api-live-apse.adyen.com/sync` and
 *   `https://terminal-api-live-apse.adyen.com/async`
 *
 * **Old live endpoints Europe**:
 * - `https://terminal-api-live.adyen.com/sync` and `https://terminal-api-live.adyen.com/async`
 *
 * **Old live endpoints United States**:
 * - `https://terminal-api-live-us.adyen.com/sync` and
 *   `https://terminal-api-live-us.adyen.com/async`
 *
 * ## Authentication for cloud communications
 * Each request to a **Cloud device API** endpoint must be signed with an API key that has the
 * **Cloud Device API role**. [Generate your API
 * Key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the
 * Customer Area and set this key to the `X-API-Key` header value of the Cloud device API request.
 *
 * When going live, generate a new API key in the live Customer Area.
 *
 * ## Available Terminal API requests, The SoftPOS configuration API is used in the mutual authentication flow between an Adyen Android or iOS [Mobile SDK](https://docs.adyen.com/point-of-sale/ipp-mobile/) and the Adyen payments platform.
 * The Mobile SDK for Android or iOS devices enables businesses to accept in-person payments using a
 * commercial off-the-shelf (COTS) device like a phone. For example, Tap to Pay transactions, or
 * transactions on a mobile device in combination with a card reader.
 *
 * ## Authentication
 * Each request to the POS Mobile API must be signed with an API key. [Generate your API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the
 * Customer Area and then set this key to the `X-API-Key` header value. You also need to have a
 * [client key](https://docs.adyen.com/development-resources/client-side-authentication/). The
 * client key is part of the setup but you will not need to use it in your integration later.
 * Therefore, when you set up the client key, you do not need to specify allowed origins, and you do
 * not need to store the key in your system. To access the live endpoints, you need to generate a
 * new API key and client key in your live Customer Area.
 * ## Versioning
 *
 * The POS Mobile API handles versioning as part of the endpoint URL.
 *
 * For example:
 * ```
 * https://softposconfig-test.adyen.com/softposconfig/v{version}/auth/certificate
 * ```
 *
 * ## Going live
 * To access the live endpoints, you need an API key and client key from your live Customer Area,
 * and switch to the live endpoint that is geographically closest to your location.
 * ### Australia:
 * https://softposconfig-live-au.adyen.com/softposconfig/v{version}/auth/certificate
 * ### Asia Pacific South East:
 * https://softposconfig-live-apse.adyen.com/softposconfig/v{version}/auth/certificate
 * ### Europe:
 * https://softposconfig-live.adyen.com/softposconfig/v{version}/auth/certificate
 * ### North East Asia:
 * https://softposconfig-live-nea.adyen.com/softposconfig/v{version}/auth/certificate
 * ### United States:
 * https://softposconfig-live-us.adyen.com/softposconfig/v3/auth/certificate
 * ## Methods, Board and manage the Adyen Payments App on your Android mobile devices.
 * ## Authentication
 * Each request to the Payments App API must be signed with an API key. [Generate your API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the
 * Customer Area and then set this key to the `X-API-Key` header value.
 *
 * ## Versioning
 *
 * Payments App API handles versioning as part of the endpoint URL. For example, to send a request
 * to this version of the `/merchants/{merchantId}/generatePaymentsAppBoardingToken` endpoint, use:
 *
 * ```text
 * https://management-test.adyen.com/v1/merchants/{merchantId}/generatePaymentsAppBoardingToken
 * ```
 *
 * ## Going live
 *
 * To access the live endpoints, you need an API key from your live Customer Area. Use this API key
 * to make requests to:
 *
 * ```text
 * https://management-live.adyen.com/v{version}
 * ```, >This API is deprecated. Use the [SoftPOS configuration API](https://docs.adyen.com/api-explorer/softpos-configuration-api/latest/overview) instead.
 *
 * The POS Mobile API is used in the mutual authentication flow between an Adyen Android or iOS [POS
 * Mobile SDK](https://docs.adyen.com/point-of-sale/ipp-mobile/) and the Adyen payments platform.
 * The POS Mobile SDK for Android or iOS devices enables businesses to accept in-person payments
 * using a commercial off-the-shelf (COTS) device like a phone. For example, Tap to Pay
 * transactions, or transactions on a mobile device in combination with a card reader.
 *
 * ## Authentication
 * Each request to the POS Mobile API must be signed with an API key. [Generate your API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the
 * Customer Area and then set this key to the `X-API-Key` header value. You also need to have a
 * [client key](https://docs.adyen.com/development-resources/client-side-authentication/). The
 * client key is part of the setup but you won't need to use it in your integration later.
 * Therefore, you don't need to specify allowed origins, and you don't need to store the key in your
 * system. To access the live endpoints, you need to generate a new API key and client key in your
 * live Customer Area.
 * ## Versioning
 *
 * The POS Mobile API handles versioning as part of the endpoint URL.
 *
 * For example:
 * ```
 * https://checkout-test.adyen.com/checkout/possdk/v68/sessions
 * ```
 *
 * ## Going live
 *
 * To access the live endpoints, you need an API key and client key from your live Customer Area.
 *
 * The live endpoint URLs contain a prefix which is unique to your company account, for example:
 * ```
 * https://{PREFIX}-checkout-live.adyenpayments.com/checkout/possdk/v68/sessions
 * ```, This API provides endpoints for managing your point-of-sale (POS) payment terminals. You can use the API to obtain information about a specific terminal, retrieve overviews of your terminals and stores, and assign terminals to a merchant account or store.
 *
 * For more information, refer to [Classic assign
 * terminals](https://docs.adyen.com/point-of-sale/automating-terminal-management/assign-terminals-api/classic-assign-terminals-api/).
 *
 * >From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1,
 * 2025. To automate the management of your terminal fleet, use our [Management
 * API](https://docs.adyen.com/api-explorer/Management/latest/overview).
 *
 * ## Authentication
 * Each request to the Terminal Management API must be signed with an API key. For this, obtain an
 * API Key from your Customer Area, as described in [How to get the API
 * key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set
 * this key to the `X-API-Key` header value, for example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: Your_API_key" \
 * ...
 * ```
 * Note that when going live, you need to generate new web service user credentials to access the
 * [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Roles and permissions
 * To use the POS Terminal Management API, you need the **POS Terminal Management API role** added
 * to your API credential. Your Adyen contact will set up the roles for you.
 * ## Versioning
 * Terminal Management API supports
 * [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in
 * the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://postfmapi-test.adyen.com/postfmapi/terminal/v1/getTerminalsUnderAccount
 * ```
 * When using versioned endpoints, Boolean response values are returned in string format: `"true"`
 * or `"false"`. If you omit the version from the endpoint URL, Boolean response values are returned
 * like this: `true` or `false`.
 * ## Going live
 * To access the live endpoints, you need an API key from your live Customer Area. Use this API key
 * to make requests to:
 *
 * ```text
 * https://postfmapi-live.adyen.com/postfmapi/terminal/v1
 * ```
 */
export class AdyenClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #payments?: Payments;
  #donations?: Donations;
  #paymentLinks?: PaymentLinks;
  #modifications?: Modifications;
  #recurringApi?: RecurringApi;
  #orders?: Orders;
  #utility?: Utility;
  #general?: General;
  #initialization?: Initialization;
  #reviewing?: Reviewing;
  #instantPayouts?: InstantPayouts;
  #rates?: Rates;
  #accountCompanyLevel?: AccountCompanyLevel;
  #accountMerchantLevel?: AccountMerchantLevel;
  #accountStoreLevel?: AccountStoreLevel;
  #payoutSettingsMerchantLevel?: PayoutSettingsMerchantLevel;
  #usersCompanyLevel?: UsersCompanyLevel;
  #usersMerchantLevel?: UsersMerchantLevel;
  #myApiCredential?: MyApiCredential;
  #apiCredentialsCompanyLevel?: ApiCredentialsCompanyLevel;
  #apiCredentialsMerchantLevel?: ApiCredentialsMerchantLevel;
  #apiKeyCompanyLevel?: ApiKeyCompanyLevel;
  #apiKeyMerchantLevel?: ApiKeyMerchantLevel;
  #clientKeyCompanyLevel?: ClientKeyCompanyLevel;
  #clientKeyMerchantLevel?: ClientKeyMerchantLevel;
  #allowedOriginsCompanyLevel?: AllowedOriginsCompanyLevel;
  #allowedOriginsMerchantLevel?: AllowedOriginsMerchantLevel;
  #webhooksCompanyLevel?: WebhooksCompanyLevel;
  #webhooksMerchantLevel?: WebhooksMerchantLevel;
  #paymentMethodsMerchantLevel?: PaymentMethodsMerchantLevel;
  #terminalsTerminalLevel?: TerminalsTerminalLevel;
  #terminalActionsCompanyLevel?: TerminalActionsCompanyLevel;
  #terminalActionsTerminalLevel?: TerminalActionsTerminalLevel;
  #terminalOrdersCompanyLevel?: TerminalOrdersCompanyLevel;
  #terminalOrdersMerchantLevel?: TerminalOrdersMerchantLevel;
  #terminalSettingsCompanyLevel?: TerminalSettingsCompanyLevel;
  #terminalSettingsMerchantLevel?: TerminalSettingsMerchantLevel;
  #terminalSettingsStoreLevel?: TerminalSettingsStoreLevel;
  #terminalSettingsTerminalLevel?: TerminalSettingsTerminalLevel;
  #androidFilesCompanyLevel?: AndroidFilesCompanyLevel;
  #splitConfigurationMerchantLevel?: SplitConfigurationMerchantLevel;
  #donationCampaigns?: DonationCampaigns;
  #accountHolders?: AccountHolders;
  #accounts?: Accounts;
  #verification?: Verification;
  #balancesOverview?: BalancesOverview;
  #balanceTransfers?: BalanceTransfers;
  #platform?: Platform;
  #balanceAccounts?: BalanceAccounts;
  #balances?: Balances;
  #managedPayoutSchedules?: ManagedPayoutSchedules;
  #customPayoutSchedulesSweeps?: CustomPayoutSchedulesSweeps;
  #authorizedCardUsers?: AuthorizedCardUsers;
  #recurringTopUps?: RecurringTopUps;
  #paymentInstruments?: PaymentInstruments;
  #paymentInstrumentGroups?: PaymentInstrumentGroups;
  #transactionRules?: TransactionRules;
  #bankAccountValidation?: BankAccountValidation;
  #networkTokens?: NetworkTokens;
  #grantAccounts?: GrantAccounts;
  #grantOffersApi?: GrantOffersApi;
  #cardOrders?: CardOrders;
  #directDebitMandates?: DirectDebitMandates;
  #manageCardPin?: ManageCardPin;
  #transferRoutes?: TransferRoutes;
  #scaDeviceManagement?: ScaDeviceManagement;
  #transferLimitsBalanceAccountLevel?: TransferLimitsBalanceAccountLevel;
  #transferLimitsBalancePlatformLevel?: TransferLimitsBalancePlatformLevel;
  #manageScaDevices?: ManageScaDevices;
  #scaAssociationManagement?: ScaAssociationManagement;
  #transfers?: Transfers;
  #transactions?: Transactions;
  #capital?: Capital;
  #cashOutApi?: CashOutApi;
  #dynamicOffers?: DynamicOffers;
  #grantsApi?: GrantsApi;
  #sessionAuthentication?: SessionAuthentication;
  #legalEntities?: LegalEntities;
  #transferInstruments?: TransferInstruments;
  #businessLinesApi?: BusinessLinesApi;
  #documents?: Documents;
  #termsOfService?: TermsOfService;
  #pciQuestionnaires?: PciQuestionnaires;
  #taxEDeliveryConsent?: TaxEDeliveryConsent;
  #hostedOnboarding?: HostedOnboarding;
  #hostedOnboardingPage?: HostedOnboardingPage;
  #pciComplianceQuestionnairePage?: PciComplianceQuestionnairePage;
  #iDealProfiles?: IDealProfiles;
  #accountVerification?: AccountVerification;
  #disputeAttachments?: DisputeAttachments;
  #raiseDisputes?: RaiseDisputes;
  #paymentsApp?: PaymentsApp;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ADYEN_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AdyenClient/72.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "72.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  get payments(): Payments {
    return (this.#payments ??= new Payments(this.#rawClient, this.#servers, this.#auth));
  }

  get donations(): Donations {
    return (this.#donations ??= new Donations(this.#rawClient, this.#servers, this.#auth));
  }

  get paymentLinks(): PaymentLinks {
    return (this.#paymentLinks ??= new PaymentLinks(this.#rawClient, this.#servers, this.#auth));
  }

  get modifications(): Modifications {
    return (this.#modifications ??= new Modifications(this.#rawClient, this.#servers, this.#auth));
  }

  get recurringApi(): RecurringApi {
    return (this.#recurringApi ??= new RecurringApi(this.#rawClient, this.#servers, this.#auth));
  }

  get orders(): Orders {
    return (this.#orders ??= new Orders(this.#rawClient, this.#servers, this.#auth));
  }

  get utility(): Utility {
    return (this.#utility ??= new Utility(this.#rawClient, this.#servers, this.#auth));
  }

  get general(): General {
    return (this.#general ??= new General(this.#rawClient, this.#servers, this.#auth));
  }

  get initialization(): Initialization {
    return (this.#initialization ??= new Initialization(this.#rawClient, this.#servers, this.#auth));
  }

  get reviewing(): Reviewing {
    return (this.#reviewing ??= new Reviewing(this.#rawClient, this.#servers, this.#auth));
  }

  get instantPayouts(): InstantPayouts {
    return (this.#instantPayouts ??= new InstantPayouts(this.#rawClient, this.#servers, this.#auth));
  }

  get rates(): Rates {
    return (this.#rates ??= new Rates(this.#rawClient, this.#servers));
  }

  get accountCompanyLevel(): AccountCompanyLevel {
    return (this.#accountCompanyLevel ??= new AccountCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get accountMerchantLevel(): AccountMerchantLevel {
    return (this.#accountMerchantLevel ??= new AccountMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get accountStoreLevel(): AccountStoreLevel {
    return (this.#accountStoreLevel ??= new AccountStoreLevel(this.#rawClient, this.#servers, this.#auth));
  }

  get payoutSettingsMerchantLevel(): PayoutSettingsMerchantLevel {
    return (this.#payoutSettingsMerchantLevel ??= new PayoutSettingsMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get usersCompanyLevel(): UsersCompanyLevel {
    return (this.#usersCompanyLevel ??= new UsersCompanyLevel(this.#rawClient, this.#servers, this.#auth));
  }

  get usersMerchantLevel(): UsersMerchantLevel {
    return (this.#usersMerchantLevel ??= new UsersMerchantLevel(this.#rawClient, this.#servers, this.#auth));
  }

  get myApiCredential(): MyApiCredential {
    return (this.#myApiCredential ??= new MyApiCredential(this.#rawClient, this.#servers, this.#auth));
  }

  get apiCredentialsCompanyLevel(): ApiCredentialsCompanyLevel {
    return (this.#apiCredentialsCompanyLevel ??= new ApiCredentialsCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get apiCredentialsMerchantLevel(): ApiCredentialsMerchantLevel {
    return (this.#apiCredentialsMerchantLevel ??= new ApiCredentialsMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get apiKeyCompanyLevel(): ApiKeyCompanyLevel {
    return (this.#apiKeyCompanyLevel ??= new ApiKeyCompanyLevel(this.#rawClient, this.#servers, this.#auth));
  }

  get apiKeyMerchantLevel(): ApiKeyMerchantLevel {
    return (this.#apiKeyMerchantLevel ??= new ApiKeyMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get clientKeyCompanyLevel(): ClientKeyCompanyLevel {
    return (this.#clientKeyCompanyLevel ??= new ClientKeyCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get clientKeyMerchantLevel(): ClientKeyMerchantLevel {
    return (this.#clientKeyMerchantLevel ??= new ClientKeyMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get allowedOriginsCompanyLevel(): AllowedOriginsCompanyLevel {
    return (this.#allowedOriginsCompanyLevel ??= new AllowedOriginsCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get allowedOriginsMerchantLevel(): AllowedOriginsMerchantLevel {
    return (this.#allowedOriginsMerchantLevel ??= new AllowedOriginsMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get webhooksCompanyLevel(): WebhooksCompanyLevel {
    return (this.#webhooksCompanyLevel ??= new WebhooksCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get webhooksMerchantLevel(): WebhooksMerchantLevel {
    return (this.#webhooksMerchantLevel ??= new WebhooksMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get paymentMethodsMerchantLevel(): PaymentMethodsMerchantLevel {
    return (this.#paymentMethodsMerchantLevel ??= new PaymentMethodsMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalsTerminalLevel(): TerminalsTerminalLevel {
    return (this.#terminalsTerminalLevel ??= new TerminalsTerminalLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalActionsCompanyLevel(): TerminalActionsCompanyLevel {
    return (this.#terminalActionsCompanyLevel ??= new TerminalActionsCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalActionsTerminalLevel(): TerminalActionsTerminalLevel {
    return (this.#terminalActionsTerminalLevel ??= new TerminalActionsTerminalLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalOrdersCompanyLevel(): TerminalOrdersCompanyLevel {
    return (this.#terminalOrdersCompanyLevel ??= new TerminalOrdersCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalOrdersMerchantLevel(): TerminalOrdersMerchantLevel {
    return (this.#terminalOrdersMerchantLevel ??= new TerminalOrdersMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalSettingsCompanyLevel(): TerminalSettingsCompanyLevel {
    return (this.#terminalSettingsCompanyLevel ??= new TerminalSettingsCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalSettingsMerchantLevel(): TerminalSettingsMerchantLevel {
    return (this.#terminalSettingsMerchantLevel ??= new TerminalSettingsMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalSettingsStoreLevel(): TerminalSettingsStoreLevel {
    return (this.#terminalSettingsStoreLevel ??= new TerminalSettingsStoreLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get terminalSettingsTerminalLevel(): TerminalSettingsTerminalLevel {
    return (this.#terminalSettingsTerminalLevel ??= new TerminalSettingsTerminalLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get androidFilesCompanyLevel(): AndroidFilesCompanyLevel {
    return (this.#androidFilesCompanyLevel ??= new AndroidFilesCompanyLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get splitConfigurationMerchantLevel(): SplitConfigurationMerchantLevel {
    return (this.#splitConfigurationMerchantLevel ??= new SplitConfigurationMerchantLevel(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get donationCampaigns(): DonationCampaigns {
    return (this.#donationCampaigns ??= new DonationCampaigns(this.#rawClient, this.#servers, this.#auth));
  }

  get accountHolders(): AccountHolders {
    return (this.#accountHolders ??= new AccountHolders(this.#rawClient, this.#servers, this.#auth));
  }

  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  get verification(): Verification {
    return (this.#verification ??= new Verification(this.#rawClient, this.#servers, this.#auth));
  }

  get balancesOverview(): BalancesOverview {
    return (this.#balancesOverview ??= new BalancesOverview(this.#rawClient, this.#servers));
  }

  get balanceTransfers(): BalanceTransfers {
    return (this.#balanceTransfers ??= new BalanceTransfers(this.#rawClient, this.#servers));
  }

  get platform(): Platform {
    return (this.#platform ??= new Platform(this.#rawClient, this.#servers, this.#auth));
  }

  get balanceAccounts(): BalanceAccounts {
    return (this.#balanceAccounts ??= new BalanceAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  get balances(): Balances {
    return (this.#balances ??= new Balances(this.#rawClient, this.#servers));
  }

  get managedPayoutSchedules(): ManagedPayoutSchedules {
    return (this.#managedPayoutSchedules ??= new ManagedPayoutSchedules(this.#rawClient, this.#servers));
  }

  get customPayoutSchedulesSweeps(): CustomPayoutSchedulesSweeps {
    return (this.#customPayoutSchedulesSweeps ??= new CustomPayoutSchedulesSweeps(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get authorizedCardUsers(): AuthorizedCardUsers {
    return (this.#authorizedCardUsers ??= new AuthorizedCardUsers(this.#rawClient, this.#servers));
  }

  get recurringTopUps(): RecurringTopUps {
    return (this.#recurringTopUps ??= new RecurringTopUps(this.#rawClient, this.#servers));
  }

  get paymentInstruments(): PaymentInstruments {
    return (this.#paymentInstruments ??= new PaymentInstruments(this.#rawClient, this.#servers, this.#auth));
  }

  get paymentInstrumentGroups(): PaymentInstrumentGroups {
    return (this.#paymentInstrumentGroups ??= new PaymentInstrumentGroups(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get transactionRules(): TransactionRules {
    return (this.#transactionRules ??= new TransactionRules(this.#rawClient, this.#servers, this.#auth));
  }

  get bankAccountValidation(): BankAccountValidation {
    return (this.#bankAccountValidation ??= new BankAccountValidation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get networkTokens(): NetworkTokens {
    return (this.#networkTokens ??= new NetworkTokens(this.#rawClient, this.#servers, this.#auth));
  }

  get grantAccounts(): GrantAccounts {
    return (this.#grantAccounts ??= new GrantAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  get grantOffersApi(): GrantOffersApi {
    return (this.#grantOffersApi ??= new GrantOffersApi(this.#rawClient, this.#servers, this.#auth));
  }

  get cardOrders(): CardOrders {
    return (this.#cardOrders ??= new CardOrders(this.#rawClient, this.#servers, this.#auth));
  }

  get directDebitMandates(): DirectDebitMandates {
    return (this.#directDebitMandates ??= new DirectDebitMandates(this.#rawClient, this.#servers));
  }

  get manageCardPin(): ManageCardPin {
    return (this.#manageCardPin ??= new ManageCardPin(this.#rawClient, this.#servers, this.#auth));
  }

  get transferRoutes(): TransferRoutes {
    return (this.#transferRoutes ??= new TransferRoutes(this.#rawClient, this.#servers, this.#auth));
  }

  get scaDeviceManagement(): ScaDeviceManagement {
    return (this.#scaDeviceManagement ??= new ScaDeviceManagement(this.#rawClient, this.#servers));
  }

  get transferLimitsBalanceAccountLevel(): TransferLimitsBalanceAccountLevel {
    return (this.#transferLimitsBalanceAccountLevel ??= new TransferLimitsBalanceAccountLevel(
      this.#rawClient,
      this.#servers,
    ));
  }

  get transferLimitsBalancePlatformLevel(): TransferLimitsBalancePlatformLevel {
    return (this.#transferLimitsBalancePlatformLevel ??= new TransferLimitsBalancePlatformLevel(
      this.#rawClient,
      this.#servers,
    ));
  }

  get manageScaDevices(): ManageScaDevices {
    return (this.#manageScaDevices ??= new ManageScaDevices(this.#rawClient, this.#servers, this.#auth));
  }

  get scaAssociationManagement(): ScaAssociationManagement {
    return (this.#scaAssociationManagement ??= new ScaAssociationManagement(this.#rawClient, this.#servers));
  }

  get transfers(): Transfers {
    return (this.#transfers ??= new Transfers(this.#rawClient, this.#servers, this.#auth));
  }

  get transactions(): Transactions {
    return (this.#transactions ??= new Transactions(this.#rawClient, this.#servers, this.#auth));
  }

  get capital(): Capital {
    return (this.#capital ??= new Capital(this.#rawClient, this.#servers, this.#auth));
  }

  get cashOutApi(): CashOutApi {
    return (this.#cashOutApi ??= new CashOutApi(this.#rawClient, this.#servers));
  }

  get dynamicOffers(): DynamicOffers {
    return (this.#dynamicOffers ??= new DynamicOffers(this.#rawClient, this.#servers));
  }

  get grantsApi(): GrantsApi {
    return (this.#grantsApi ??= new GrantsApi(this.#rawClient, this.#servers));
  }

  get sessionAuthentication(): SessionAuthentication {
    return (this.#sessionAuthentication ??= new SessionAuthentication(this.#rawClient, this.#servers));
  }

  get legalEntities(): LegalEntities {
    return (this.#legalEntities ??= new LegalEntities(this.#rawClient, this.#servers, this.#auth));
  }

  get transferInstruments(): TransferInstruments {
    return (this.#transferInstruments ??= new TransferInstruments(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get businessLinesApi(): BusinessLinesApi {
    return (this.#businessLinesApi ??= new BusinessLinesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers, this.#auth));
  }

  get termsOfService(): TermsOfService {
    return (this.#termsOfService ??= new TermsOfService(this.#rawClient, this.#servers, this.#auth));
  }

  get pciQuestionnaires(): PciQuestionnaires {
    return (this.#pciQuestionnaires ??= new PciQuestionnaires(this.#rawClient, this.#servers, this.#auth));
  }

  get taxEDeliveryConsent(): TaxEDeliveryConsent {
    return (this.#taxEDeliveryConsent ??= new TaxEDeliveryConsent(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get hostedOnboarding(): HostedOnboarding {
    return (this.#hostedOnboarding ??= new HostedOnboarding(this.#rawClient, this.#servers, this.#auth));
  }

  get hostedOnboardingPage(): HostedOnboardingPage {
    return (this.#hostedOnboardingPage ??= new HostedOnboardingPage(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get pciComplianceQuestionnairePage(): PciComplianceQuestionnairePage {
    return (this.#pciComplianceQuestionnairePage ??= new PciComplianceQuestionnairePage(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get iDealProfiles(): IDealProfiles {
    return (this.#iDealProfiles ??= new IDealProfiles(this.#rawClient, this.#servers));
  }

  get accountVerification(): AccountVerification {
    return (this.#accountVerification ??= new AccountVerification(this.#rawClient, this.#servers));
  }

  get disputeAttachments(): DisputeAttachments {
    return (this.#disputeAttachments ??= new DisputeAttachments(this.#rawClient, this.#servers));
  }

  get raiseDisputes(): RaiseDisputes {
    return (this.#raiseDisputes ??= new RaiseDisputes(this.#rawClient, this.#servers));
  }

  get paymentsApp(): PaymentsApp {
    return (this.#paymentsApp ??= new PaymentsApp(this.#rawClient, this.#servers));
  }

  /**
   * Abort Request
   *
   * @remarks
   * Body of the Abort Request message. It conveys Information requested for identification of the
   * message request carrying the transaction to abort. A message to display on the CustomerError
   * Device could be sent by the Sale System (DisplayOutput).
   *
   * @returns A successful `AbortRequest` returns a response with a **200 OK** HTTP status code and
   * no body.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  abortRequest(
    request: AdyenClient.AbortRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/abort"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => abortRequestSchema)) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Admin Request
   *
   * @remarks
   * Empty. Content of the Custom Admin Request message.
   *
   * @returns It conveys the result of the Custom Admin. Content of the Custom Admin Response
   * message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminRequest(
    request: AdyenClient.AdminRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/admin"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => adminRequestSchema)) },
      },
      {
        success: { kind: "json", schema: adminResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BalanceInquiry Request
   *
   * @remarks
   * It conveys Information related to the account for which a Balance Inquiry is requested. Content
   * of the Balance Inquiry Request message.
   *
   * @returns Content of the Balance Inquiry Response message. It conveys the balance and the
   * identification of the associated payment, loyalty or stored value account.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  balanceInquiryRequest(
    request: AdyenClient.BalanceInquiryRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceInquiryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/balanceinquiry"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => balanceInquiryRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: balanceInquiryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CardAcquisition Request
   *
   * @remarks
   * It conveys Information related to the payment and loyalty cards to read and analyse. This
   * message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to
   * this Card Acquisition message pair. Content of the Card Acquisition Request message.
   *
   * @returns It conveys Information related to the payment and loyalty cards read and processed by
   * the POI System and entered by the Customer. Content of the Card Acquisition Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cardAcquisitionRequest(
    request: AdyenClient.CardAcquisitionRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<CardAcquisitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/cardacquisition"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cardAcquisitionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cardAcquisitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CardReaderAPDU Request
   *
   * @remarks
   * It contains the APDU request to send to the chip of the card, and a possible invitation message
   * to display on the CashierInterface or the CustomerInterface. Content of the Card Reader APDU
   * Request message.
   *
   * @returns Content of the Card Reader APDU Response message. It contains the result of the
   * requested service, APDU response sent by the chip of the card in response to the APDU request.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cardReaderApduRequest(
    request: AdyenClient.CardReaderApduRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<CardReaderApduResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/cardreaderapdu"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cardReaderApduRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cardReaderApduResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Diagnosis Request
   *
   * @remarks
   * It conveys Information related to the target POI for which the diagnosis is requested. Content
   * of the Diagnosis Request message.
   *
   * @returns It conveys the result of the requested diagnosis and a possible message to display on
   * a logical device. Content of the Diagnosis Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  diagnosisRequest(
    request: AdyenClient.DiagnosisRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosisResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/diagnosis"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => diagnosisRequestSchema)) },
      },
      {
        success: { kind: "json", schema: diagnosisResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Display Request
   *
   * @remarks
   * It conveys the data to display and the way to process the display. It contains the complete
   * content to display. It might contain an operation (the DisplayOutput element) per Display
   * Device type. Content of the Display Request message.
   *
   * @returns It conveys the result of the display, parallel to the message request, except if
   * response not required and absent. Content of the Display Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  displayRequest(
    request: AdyenClient.DisplayRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<DisplayResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/display"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => displayRequestSchema)) },
      },
      {
        success: { kind: "json", schema: displayResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * EnableService Request
   *
   * @remarks
   * It conveys the services that will be enabled for the POI Terminal without the request of the
   * Sale System, and a possible invitation for the Customer to start the services. Content of the
   * Enable Service Request message.
   *
   * @returns It conveys the result of the Enable Service processing. Content of the Enable Service
   * Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableServiceRequest(
    request: AdyenClient.EnableServiceRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<EnableServiceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/enableservice"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => enableServiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: enableServiceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * GetTotals Request
   *
   * @remarks
   * It conveys information from the Sale System related to the scope and the format of the totals
   * to be computed by the POI System. Content of the Get Totals Request message.
   *
   * @returns Content of the Reconciliation Response message. It conveys Information related to the
   * Reconciliation transaction processed by the POI System.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTotalsRequest(
    request: AdyenClient.GetTotalsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTotalsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/gettotals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => getTotalsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: getTotalsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Input Request
   *
   * @remarks
   * Content of the `InputRequest` message. It conveys the data to display and how to process it. In
   * addition to the display on the Input Device, it might contain an operation (the `DisplayOutput`
   * element) per Display Device type.
   *
   * @returns It conveys the result of the input or the result of the outputs, parallel to the
   * message request, except if response not required and absent. Content of the Input Response
   * message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inputRequest(
    request: AdyenClient.InputRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<InputResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/input"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => inputRequestSchema)) },
      },
      {
        success: { kind: "json", schema: inputResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Login Request
   *
   * @remarks
   * It conveys information related to the session (period between a Login and the following Logout)
   * to process. Content of the `LoginRequest` message.
   *
   * @returns It conveys Information related to the Login to process. Content of the Login Response
   * message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  loginRequest(
    request: AdyenClient.LoginRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/login"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => loginRequestSchema)) },
      },
      {
        success: { kind: "json", schema: loginResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Logout Request
   *
   * @remarks
   * Empty. Content of the Logout Request message.
   *
   * @returns It conveys the result of the Logout. Content of the Logout Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  logoutRequest(
    request: AdyenClient.LogoutRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<LogoutResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/logout"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoutRequestSchema)) },
      },
      {
        success: { kind: "json", schema: logoutResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Payment Request
   *
   * @remarks
   * Request sent to terminal to initiate payment. It conveys Information related to the Payment
   * transaction to process. Content of the `PaymentRequest` message.
   *
   * @returns It conveys Information related to the Payment transaction processed by the POI System.
   * Content of the Payment Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentRequest(
    request: AdyenClient.PaymentRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponse4, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/payment"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequest2Schema)) },
      },
      {
        success: { kind: "json", schema: paymentResponse4Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Print Request
   *
   * @remarks
   * Content of the Print Request message. It conveys the complete data to print and how to process
   * the print.
   *
   * @returns It conveys the result of the print, parallel to the message request, except if
   * response not required and absent. Content of the Print Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  printRequest(
    request: AdyenClient.PrintRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<PrintResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/print"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => printRequestSchema)) },
      },
      {
        success: { kind: "json", schema: printResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Reconciliation Request
   *
   * @remarks
   * Content of the Reconciliation Request message. It conveys Information related to the
   * Reconciliation requested by the Sale System.
   *
   * @returns It conveys Information related to the Reconciliation transaction processed by the POI
   * System. Content of the Reconciliation Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reconciliationRequest(
    request: AdyenClient.ReconciliationRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ReconciliationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/reconciliation"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => reconciliationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: reconciliationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Reversal Request
   *
   * @remarks
   * It conveys Information related to the reversal of a previous payment or a loyalty transaction.
   * Content of the Reversal Request message.
   *
   * @returns It conveys Information related to the reversal processed by the POI System. Content of
   * the Reversal Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reversalRequest(
    request: AdyenClient.ReversalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ReversalResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/reversal"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => reversalRequestSchema)) },
      },
      {
        success: { kind: "json", schema: reversalResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * StoredValue Request
   *
   * @remarks
   * It conveys Information related to the Stored Value transaction to process. Content of the
   * Stored Value Request message.
   *
   * @returns It conveys Information related to the Stored Value transaction processed by the POI
   * System. Content of the Stored Value Response message.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  storedValueRequest(
    request: AdyenClient.StoredValueRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/storedvalue"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * TransactionStatus Request
   *
   * @remarks
   * Content of the TransactionStatus Request message. It conveys Information requested for status
   * of the last or current Payment, Loyalty or Reversal transaction.
   *
   * @returns Content of the TransactionStatus Response message. It conveys Information related to
   * the status of the last or current Payment, Loyalty or Reversal transaction.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionStatusRequest(
    request: AdyenClient.TransactionStatusRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionStatusResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default24("/transactionstatus"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transactionStatusRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: transactionStatusResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace AdyenClient {
  export type AbortRequestRequest = {
    body?: AbortRequest;
  };

  export type AdminRequestRequest = {
    body?: AdminRequest;
  };

  export type BalanceInquiryRequestRequest = {
    body?: BalanceInquiryRequest;
  };

  export type CardAcquisitionRequestRequest = {
    body?: CardAcquisitionRequest;
  };

  export type CardReaderApduRequestRequest = {
    body?: CardReaderApduRequest;
  };

  export type DiagnosisRequestRequest = {
    body?: DiagnosisRequest;
  };

  export type DisplayRequestRequest = {
    body?: DisplayRequest;
  };

  export type EnableServiceRequestRequest = {
    body?: EnableServiceRequest;
  };

  export type GetTotalsRequestRequest = {
    body?: GetTotalsRequest;
  };

  export type InputRequestRequest = {
    body?: InputRequest;
  };

  export type LoginRequestRequest = {
    body?: LoginRequest;
  };

  export type LogoutRequestRequest = {
    body?: LogoutRequest;
  };

  export type PaymentRequestRequest = {
    body?: PaymentRequest2;
  };

  export type PrintRequestRequest = {
    body?: PrintRequest;
  };

  export type ReconciliationRequestRequest = {
    body?: ReconciliationRequest;
  };

  export type ReversalRequestRequest = {
    body?: ReversalRequest;
  };

  export type StoredValueRequestRequest = {
    body?: StoredValueRequest;
  };

  export type TransactionStatusRequestRequest = {
    body?: TransactionStatusRequest;
  };
}
