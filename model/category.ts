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


export interface Category { 
    id: string;
    categoryGroupId: string;
    name: string;
    /**
     * Whether or not the category is hidden
     */
    hidden: boolean;
    /**
     * If category is hidden this is the id of the category group it originally belonged to before it was hidden.
     */
    originalCategoryGroupId?: string;
    note: string;
    /**
     * Budgeted amount in milliunits format
     */
    budgeted: number;
    /**
     * Activity amount in milliunits format
     */
    activity: number;
    /**
     * Balance in milliunits format
     */
    balance: number;
    /**
     * The type of goal, if the cagegory has a goal (TB=Target Category Balance, TBD=Target Category Balance by Date, MF=Monthly Funding)
     */
    goalType: Category.GoalTypeEnum;
    /**
     * The month a goal was created
     */
    goalCreationMonth: string;
    /**
     * The goal target amount in milliunits
     */
    goalTarget: number;
    /**
     * If the goal type is \'TBD\' (Target Category Balance by Date), this is the target month for the goal to be completed
     */
    goalTargetMonth: string;
    /**
     * The percentage completion of the goal
     */
    goalPercentageComplete: number;
    /**
     * Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.
     */
    deleted: boolean;
}
export namespace Category {
    export type GoalTypeEnum = 'TB' | 'TBD' | 'MF';
    export const GoalTypeEnum = {
        TB: 'TB' as GoalTypeEnum,
        TBD: 'TBD' as GoalTypeEnum,
        MF: 'MF' as GoalTypeEnum
    };
}

