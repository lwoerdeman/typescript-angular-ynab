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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ErrorResponse } from '../model/errorResponse';
import { HybridTransactionsResponse } from '../model/hybridTransactionsResponse';
import { SaveTransactionWrapper } from '../model/saveTransactionWrapper';
import { SaveTransactionsResponse } from '../model/saveTransactionsResponse';
import { SaveTransactionsWrapper } from '../model/saveTransactionsWrapper';
import { TransactionResponse } from '../model/transactionResponse';
import { TransactionsResponse } from '../model/transactionsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

    protected basePath = 'https://api.youneedabudget.com/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create a single transaction or multiple transactions
     * Creates a single transaction or multiple transactions.  If you provide a body containing a \&#39;transaction\&#39; object, a single transaction will be created and if you provide a body containing a \&#39;transactions\&#39; array, multiple transactions will be created.
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param data The transaction or transactions to create.  To create a single transaction you can specify a value for the \&#39;transaction\&#39; object and to create multiple transactions you can specify an array of \&#39;transactions\&#39;.  It is expected that you will only provide a value for one of these objects.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createTransaction(budgetId: string, data: SaveTransactionsWrapper, observe?: 'body', reportProgress?: boolean): Observable<SaveTransactionsResponse>;
    public createTransaction(budgetId: string, data: SaveTransactionsWrapper, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SaveTransactionsResponse>>;
    public createTransaction(budgetId: string, data: SaveTransactionsWrapper, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SaveTransactionsResponse>>;
    public createTransaction(budgetId: string, data: SaveTransactionsWrapper, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling createTransaction.');
        }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling createTransaction.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<SaveTransactionsResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/transactions`,
            data,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Single transaction
     * Returns a single transaction
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param transactionId The id of the transaction
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTransactionById(budgetId: string, transactionId: string, observe?: 'body', reportProgress?: boolean): Observable<TransactionResponse>;
    public getTransactionById(budgetId: string, transactionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TransactionResponse>>;
    public getTransactionById(budgetId: string, transactionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TransactionResponse>>;
    public getTransactionById(budgetId: string, transactionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling getTransactionById.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling getTransactionById.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<TransactionResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/transactions/${encodeURIComponent(String(transactionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List transactions
     * Returns budget transactions
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param sinceDate If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param type If specified, only transactions of the specified type will be included. \&#39;uncategorized\&#39; and \&#39;unapproved\&#39; are currently supported.
     * @param lastKnowledgeOfServer The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTransactions(budgetId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'body', reportProgress?: boolean): Observable<TransactionsResponse>;
    public getTransactions(budgetId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TransactionsResponse>>;
    public getTransactions(budgetId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TransactionsResponse>>;
    public getTransactions(budgetId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling getTransactions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sinceDate !== undefined && sinceDate !== null) {
            queryParameters = queryParameters.set('since_date', <any>sinceDate);
        }
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }
        if (lastKnowledgeOfServer !== undefined && lastKnowledgeOfServer !== null) {
            queryParameters = queryParameters.set('last_knowledge_of_server', <any>lastKnowledgeOfServer);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<TransactionsResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/transactions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List account transactions
     * Returns all transactions for a specified account
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param accountId The id of the account
     * @param sinceDate If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param type If specified, only transactions of the specified type will be included. \&#39;uncategorized\&#39; and \&#39;unapproved\&#39; are currently supported.
     * @param lastKnowledgeOfServer The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'body', reportProgress?: boolean): Observable<TransactionsResponse>;
    public getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TransactionsResponse>>;
    public getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TransactionsResponse>>;
    public getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling getTransactionsByAccount.');
        }
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getTransactionsByAccount.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sinceDate !== undefined && sinceDate !== null) {
            queryParameters = queryParameters.set('since_date', <any>sinceDate);
        }
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }
        if (lastKnowledgeOfServer !== undefined && lastKnowledgeOfServer !== null) {
            queryParameters = queryParameters.set('last_knowledge_of_server', <any>lastKnowledgeOfServer);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<TransactionsResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/accounts/${encodeURIComponent(String(accountId))}/transactions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List category transactions
     * Returns all transactions for a specified category
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param categoryId The id of the category
     * @param sinceDate If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param type If specified, only transactions of the specified type will be included. \&#39;uncategorized\&#39; and \&#39;unapproved\&#39; are currently supported.
     * @param lastKnowledgeOfServer The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'body', reportProgress?: boolean): Observable<HybridTransactionsResponse>;
    public getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HybridTransactionsResponse>>;
    public getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HybridTransactionsResponse>>;
    public getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling getTransactionsByCategory.');
        }
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling getTransactionsByCategory.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sinceDate !== undefined && sinceDate !== null) {
            queryParameters = queryParameters.set('since_date', <any>sinceDate);
        }
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }
        if (lastKnowledgeOfServer !== undefined && lastKnowledgeOfServer !== null) {
            queryParameters = queryParameters.set('last_knowledge_of_server', <any>lastKnowledgeOfServer);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<HybridTransactionsResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/categories/${encodeURIComponent(String(categoryId))}/transactions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List payee transactions
     * Returns all transactions for a specified payee
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param payeeId The id of the payee
     * @param sinceDate If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param type If specified, only transactions of the specified type will be included. \&#39;uncategorized\&#39; and \&#39;unapproved\&#39; are currently supported.
     * @param lastKnowledgeOfServer The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTransactionsByPayee(budgetId: string, payeeId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'body', reportProgress?: boolean): Observable<HybridTransactionsResponse>;
    public getTransactionsByPayee(budgetId: string, payeeId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HybridTransactionsResponse>>;
    public getTransactionsByPayee(budgetId: string, payeeId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HybridTransactionsResponse>>;
    public getTransactionsByPayee(budgetId: string, payeeId: string, sinceDate?: string, type?: 'uncategorized' | 'unapproved', lastKnowledgeOfServer?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling getTransactionsByPayee.');
        }
        if (payeeId === null || payeeId === undefined) {
            throw new Error('Required parameter payeeId was null or undefined when calling getTransactionsByPayee.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sinceDate !== undefined && sinceDate !== null) {
            queryParameters = queryParameters.set('since_date', <any>sinceDate);
        }
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }
        if (lastKnowledgeOfServer !== undefined && lastKnowledgeOfServer !== null) {
            queryParameters = queryParameters.set('last_knowledge_of_server', <any>lastKnowledgeOfServer);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<HybridTransactionsResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/payees/${encodeURIComponent(String(payeeId))}/transactions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates an existing transaction
     * Updates a transaction
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param transactionId The id of the transaction
     * @param data The transaction to update
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTransaction(budgetId: string, transactionId: string, data: SaveTransactionWrapper, observe?: 'body', reportProgress?: boolean): Observable<TransactionResponse>;
    public updateTransaction(budgetId: string, transactionId: string, data: SaveTransactionWrapper, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TransactionResponse>>;
    public updateTransaction(budgetId: string, transactionId: string, data: SaveTransactionWrapper, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TransactionResponse>>;
    public updateTransaction(budgetId: string, transactionId: string, data: SaveTransactionWrapper, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling updateTransaction.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling updateTransaction.');
        }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling updateTransaction.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<TransactionResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/transactions/${encodeURIComponent(String(transactionId))}`,
            data,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update multiple transactions
     * Updates multiple transactions, by \&#39;id\&#39; or \&#39;import_id\&#39;.
     * @param budgetId The id of the budget (\&quot;last-used\&quot; can also be used to specify the last used budget)
     * @param data The transactions to update.  Optionally, transaction \&#39;id\&#39; value(s) can be specified as null and an \&#39;import_id\&#39; value can be provided which will allow transaction(s) to updated by their import_id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTransactions(budgetId: string, data: SaveTransactionsWrapper, observe?: 'body', reportProgress?: boolean): Observable<SaveTransactionsResponse>;
    public updateTransactions(budgetId: string, data: SaveTransactionsWrapper, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SaveTransactionsResponse>>;
    public updateTransactions(budgetId: string, data: SaveTransactionsWrapper, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SaveTransactionsResponse>>;
    public updateTransactions(budgetId: string, data: SaveTransactionsWrapper, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (budgetId === null || budgetId === undefined) {
            throw new Error('Required parameter budgetId was null or undefined when calling updateTransactions.');
        }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling updateTransactions.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<SaveTransactionsResponse>(`${this.configuration.basePath}/budgets/${encodeURIComponent(String(budgetId))}/transactions`,
            data,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
