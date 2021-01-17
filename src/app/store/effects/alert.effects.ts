import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions'



@Injectable()
export class AlertEffects {



  constructor(private actions$: Actions , private alertService : AlertService) {}

  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.loginModal, fromAuthAction.registerPage),
        tap(() => this.alertService.info('Checking your information'))
      ),
    { dispatch: false }
  );

  welcomeLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.loginSuccess),
        tap((action) =>
          {
            this.alertService.success(
            
              'Welcome back' + action.user.username + ' !'
            )
          }
        )
      ),
    { dispatch: false }
  );

  welcomeRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.registerSuccess),
        tap((action) =>
          {
  
            this.alertService.success(
            
              'Welcome  ' + action.user.username + ' !'
            )
          }
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.loginFailure ),
        tap((action) => {
          console.log(action.err.error.text)
          this.alertService.danger(`Unable to login ${action.err.error.text}`)
        }
        
        )
      ),
    { dispatch: false }
  );

  unableToRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.registerFailure),
        tap((action) => {
          console.log(action.err.error.text , "from register error")
          this.alertService.danger(`Unable to register ${action.err.error.text}`)
        })
      ),
    { dispatch: false }
  );

  // youAreLoggedOut$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromAuthAction.logout),
  //       tap(() => this.alertService.warning('You are logged out'))
  //     ),
  //   { dispatch: false }
  // );
  // comeBackSoon$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromAuthAction.logout),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.info('Come Back Soon!');
  //         }, 2000)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  // unableToLoadProducts$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromProductActions.loadProductsFailure),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.danger('Unable to load products');
  //         }, 2000)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  // productCreated$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromProductActions.addProductSuccess),
  //       tap((action) => this.alertService.success('Product Created'))
  //     ),
  //   { dispatch: false }
  // );

  // unableToCreateProduct$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromProductActions.addProductFailure),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.danger('Unable to create product');
  //         }, 2000)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  // productUpsertSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromProductActions.upsertProductSuccess),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.info('Product Updated');
  //         }, 1000)
  //       )
  //     ),
  //   { dispatch: false }
  // );
  // unableToEditProduct$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromProductActions.upsertProductFailure),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.danger('Unable to edit product');
  //         }, 1000)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  // removeProductFromStore$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         fromProductActions.deleteProduct,
  //         fromProductActions.deleteItemProduct
  //       ),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.warning('Remove Product From Store');
  //         }, 1000)
  //       )
  //     ),
  //   { dispatch: false }
  // );
  // productDeleted$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromProductActions.deleteProductSuccess),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.info('Product removed from Database');
  //         }, 1000)
  //       )
  //     ),
  //   { dispatch: false }
  // );
  // unableToDeleteProduct$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromProductActions.deleteProductFailure),
  //       tap(() =>
  //         setTimeout(() => {
  //           this.alertService.danger('Unable to delete product');
  //         }, 1000)
  //       )
  //     ),
  //   { dispatch: false }
  // );

}
