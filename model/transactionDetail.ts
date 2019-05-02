/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SubTransaction } from './subTransaction';
import { TransactionSummary } from './transactionSummary';


export interface TransactionDetail { 
    id: string;
    date: string;
    /**
     * The transaction amount in milliunits format
     */
    amount: number;
    memo: string;
    /**
     * The cleared status of the transaction
     */
    cleared: TransactionDetail.ClearedEnum;
    /**
     * Whether or not the transaction is approved
     */
    approved: boolean;
    /**
     * The transaction flag
     */
    flagColor: TransactionDetail.FlagColorEnum;
    accountId: string;
    payeeId: string;
    categoryId: string;
    /**
     * If a transfer transaction, the account to which it transfers
     */
    transferAccountId: string;
    /**
     * If a transfer transaction, the id of transaction on the other side of the transfer
     */
    transferTransactionId: string;
    /**
     * If transaction is matched, the id of the matched transaction
     */
    matchedTransactionId: string;
    /**
     * If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: \'YNAB:[milliunit_amount]:[iso_date]:[occurrence]\'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of \'YNAB:-294230:2015-12-30:1\'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be \'YNAB:-294230:2015-12-30:2\'.
     */
    importId: string;
    /**
     * Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
     */
    deleted: boolean;
    accountName: string;
    payeeName: string;
    categoryName: string;
    /**
     * If a split transaction, the subtransactions.
     */
    subtransactions: Array<SubTransaction>;
}
export namespace TransactionDetail {
    export type ClearedEnum = 'cleared' | 'uncleared' | 'reconciled';
    export const ClearedEnum = {
        Cleared: 'cleared' as ClearedEnum,
        Uncleared: 'uncleared' as ClearedEnum,
        Reconciled: 'reconciled' as ClearedEnum
    };
    export type FlagColorEnum = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
    export const FlagColorEnum = {
        Red: 'red' as FlagColorEnum,
        Orange: 'orange' as FlagColorEnum,
        Yellow: 'yellow' as FlagColorEnum,
        Green: 'green' as FlagColorEnum,
        Blue: 'blue' as FlagColorEnum,
        Purple: 'purple' as FlagColorEnum
    };
}

