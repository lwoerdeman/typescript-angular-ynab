import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountsService } from './api/accounts.service';
import { BudgetsService } from './api/budgets.service';
import { CategoriesService } from './api/categories.service';
import { DeprecatedService } from './api/deprecated.service';
import { MonthsService } from './api/months.service';
import { PayeeLocationsService } from './api/payeeLocations.service';
import { PayeesService } from './api/payees.service';
import { ScheduledTransactionsService } from './api/scheduledTransactions.service';
import { TransactionsService } from './api/transactions.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AccountsService,
    BudgetsService,
    CategoriesService,
    DeprecatedService,
    MonthsService,
    PayeeLocationsService,
    PayeesService,
    ScheduledTransactionsService,
    TransactionsService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
