type CompiledFormat = ( date: Date ) => string;
type CompiledJPath = ( data: any, vars?: any ) => any;
type CompiledJString = ( data: any, vars?: any ) => string;
type EventsCallback = ( name: string, ...values: Array<any> ) => void;

export function jpath( jpath: string, data: any, vars?: any ): any;

export namespace jpath {
    export function expr( jexpr: string ): CompiledJPath;
    export function string( jstring: string ): CompiledJString;
}

export namespace date {
    export function format( format: string, date: Date, locale?: string ): string;
    export function formatter( format: string, locale?: string ): CompiledFormat;

}

export namespace number {
    export function format( number: number, digits: number | null, sep?: string, point?: string ): string;
}

export class Events {
    on( name: string, callback: EventsCallback ): this;
    off( name: string, callback: EventsCallback ): this;
    once( name: string, callback: EventsCallback ): this;
    trigger( name: string, ...values: Array<any> ): this;
    atrigger( name: string, ...values: Array<any> ): void;
    forward( name: string, obj: Events ): this;
}

