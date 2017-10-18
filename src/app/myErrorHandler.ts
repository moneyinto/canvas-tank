import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.error(error);
        // do something with the exception
    }
}
