import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import { getAllPosts } from './posts.action';
import { Post } from 'src/app/models/posts.model';

@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private http: HttpClient) { }

    loadItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllPosts),
            mergeMap(() =>
                this.http.get<any>('http://localhost:5000/api/notes/getAllNotes').pipe(
                    map(todos => {
                        console.log('todos in ngrx store modules', todos);
                    })
                )
            )
        ), {dispatch: false}
    );

    // addItem$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(ItemActions.addItem),
    //         mergeMap(action =>
    //             this.http.post<any>('http://localhost:3000/items', action.item).pipe(
    //                 map(item => ItemActions.addItemSuccess({ item })),
    //                 catchError(error => of(ItemActions.addItemFailure({ error })))
    //             )
    //         )
    //     )
    // );

    // updateItem$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(ItemActions.updateItem),
    //         mergeMap(action =>
    //             this.http.put<any>(`http://localhost:3000/items/${action.item._id}`, action.item).pipe(
    //                 map(item => ItemActions.updateItemSuccess({ item })),
    //                 catchError(error => of(ItemActions.updateItemFailure({ error })))
    //             )
    //         )
    //     )
    // );

    // deleteItem$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(ItemActions.deleteItem),
    //         mergeMap(action =>
    //             this.http.delete<any>(`http://localhost:3000/items/${action.id}`).pipe(
    //                 map(() => ItemActions.deleteItemSuccess({ id: action.id })),
    //                 catchError(error => of(ItemActions.deleteItemFailure({ error })))
    //             )
    //         )
    //     )
    // );
}
