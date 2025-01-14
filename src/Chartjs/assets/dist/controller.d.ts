import { Controller } from '@hotwired/stimulus';
export default class extends Controller {
    readonly viewValue: any;
    static values: {
        view: ObjectConstructor;
    };
    connect(): void;
    _dispatchEvent(name: string, payload: any): void;
}
