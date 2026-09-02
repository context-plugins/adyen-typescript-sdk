import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { anyAuth } from "./core/auth/schemes.js";
import { RawClient } from "./core/raw-client.js";
import { ResponseError } from "./core/response-error.js";
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

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

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

  abortRequest(
    request: AdyenClient.AbortRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/abort"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => abortRequestSchema)) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  adminRequest(
    request: AdyenClient.AdminRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminResponse, ResponseError> {
    return this.#rawClient.execute<AdminResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/admin"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => adminRequestSchema)) },
      },
      {
        success: { kind: "json", schema: adminResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  balanceInquiryRequest(
    request: AdyenClient.BalanceInquiryRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceInquiryResponse, ResponseError> {
    return this.#rawClient.execute<BalanceInquiryResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/balanceinquiry"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => balanceInquiryRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: balanceInquiryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cardAcquisitionRequest(
    request: AdyenClient.CardAcquisitionRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<CardAcquisitionResponse, ResponseError> {
    return this.#rawClient.execute<CardAcquisitionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/cardacquisition"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cardAcquisitionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cardAcquisitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cardReaderApduRequest(
    request: AdyenClient.CardReaderApduRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<CardReaderApduResponse, ResponseError> {
    return this.#rawClient.execute<CardReaderApduResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/cardreaderapdu"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cardReaderApduRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cardReaderApduResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  diagnosisRequest(
    request: AdyenClient.DiagnosisRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosisResponse, ResponseError> {
    return this.#rawClient.execute<DiagnosisResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/diagnosis"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => diagnosisRequestSchema)) },
      },
      {
        success: { kind: "json", schema: diagnosisResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  displayRequest(
    request: AdyenClient.DisplayRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<DisplayResponse, ResponseError> {
    return this.#rawClient.execute<DisplayResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/display"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => displayRequestSchema)) },
      },
      {
        success: { kind: "json", schema: displayResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  enableServiceRequest(
    request: AdyenClient.EnableServiceRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<EnableServiceResponse, ResponseError> {
    return this.#rawClient.execute<EnableServiceResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/enableservice"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => enableServiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: enableServiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTotalsRequest(
    request: AdyenClient.GetTotalsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTotalsResponse, ResponseError> {
    return this.#rawClient.execute<GetTotalsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/gettotals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => getTotalsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: getTotalsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  inputRequest(
    request: AdyenClient.InputRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<InputResponse, ResponseError> {
    return this.#rawClient.execute<InputResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/input"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => inputRequestSchema)) },
      },
      {
        success: { kind: "json", schema: inputResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  loginRequest(
    request: AdyenClient.LoginRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginResponse, ResponseError> {
    return this.#rawClient.execute<LoginResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/login"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => loginRequestSchema)) },
      },
      {
        success: { kind: "json", schema: loginResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  logoutRequest(
    request: AdyenClient.LogoutRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<LogoutResponse, ResponseError> {
    return this.#rawClient.execute<LogoutResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/logout"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoutRequestSchema)) },
      },
      {
        success: { kind: "json", schema: logoutResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  paymentRequest(
    request: AdyenClient.PaymentRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponse4, ResponseError> {
    return this.#rawClient.execute<PaymentResponse4, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/payment"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequest2Schema)) },
      },
      {
        success: { kind: "json", schema: paymentResponse4Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  printRequest(
    request: AdyenClient.PrintRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<PrintResponse, ResponseError> {
    return this.#rawClient.execute<PrintResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/print"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => printRequestSchema)) },
      },
      {
        success: { kind: "json", schema: printResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  reconciliationRequest(
    request: AdyenClient.ReconciliationRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ReconciliationResponse, ResponseError> {
    return this.#rawClient.execute<ReconciliationResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/reconciliation"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => reconciliationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: reconciliationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  reversalRequest(
    request: AdyenClient.ReversalRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ReversalResponse, ResponseError> {
    return this.#rawClient.execute<ReversalResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/reversal"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => reversalRequestSchema)) },
      },
      {
        success: { kind: "json", schema: reversalResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  storedValueRequest(
    request: AdyenClient.StoredValueRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredValueResponse, ResponseError> {
    return this.#rawClient.execute<StoredValueResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/storedvalue"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedValueRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedValueResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  transactionStatusRequest(
    request: AdyenClient.TransactionStatusRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionStatusResponse, ResponseError> {
    return this.#rawClient.execute<TransactionStatusResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default24("/transactionstatus"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transactionStatusRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: transactionStatusResponseSchema },
        errorFactory: ResponseError,
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
