/**
 * Base class for classes that wish to support binding and firing of events. You need to implement the `shouldFireEvent` method
 * in your concrete subclasses of this class.
 */
export declare abstract class EventGenerator {
    private _listeners;
    private eventsSuspended;
    private tick;
    private eventsToDieOn;
    private queue;
    protected abstract shouldFireEvent(event: string, value: any, originalEvent?: Event): boolean;
    constructor();
    /**
     * Fire the named event
     * @param event Event to fire
     * @param value Value to pass to event handlers
     * @param originalEvent Optional original event that caused this event to be fired.
     */
    fire<T>(event: string, value?: T, originalEvent?: Event): any;
    /**
     * Drain the queue of pending event notifications
     * @private
     */
    private _drain;
    /**
     * Unbind the given event listener, or all listeners. If you call this method with no arguments then all event
     * listeners are unbound.
     * @param eventOrListener Either an event name, or an event handler function
     * @param listener If `eventOrListener` is defined, this is the event handler to unbind.
     */
    unbind(eventOrListener?: string | Function, listener?: Function): EventGenerator;
    /**
     * gets all listeners for the given named event.
     * @param forEvent
     */
    getListener(forEvent: string): Array<any>;
    /**
     * Returns whether not event firing is currently suspended
     */
    isSuspendEvents(): boolean;
    /**
     * Sets whether not event firing is currently suspended
     */
    setSuspendEvents(val: boolean): void;
    /**
     * Bind an event listener. This method can be used with a type parameter by call sites; although it's not necessary it can be
     * helpful to use this to ensure you've thought about what the payload to your event handler is going to be.
     * @param event Name of the event(s) to bind to.
     * @param listener Function to bind to the given event(s)
     * @param insertAtStart Whether or not to insert this listener at the head of the listener queue. Defaults to false.
     */
    bind<T = any>(event: string | Array<String>, listener: (a: T, e?: any) => any, insertAtStart?: boolean): EventGenerator;
    /**
     * Run the given function without firing any events.
     * @param fn
     */
    silently(fn: Function): void;
}
/**
 * Subclass of EventGenerator with a default implementation of `shouldFireEvent`, which returns true always.
 */
export declare class OptimisticEventGenerator extends EventGenerator {
    shouldFireEvent(event: string, value: any, originalEvent?: Event): boolean;
}
//# sourceMappingURL=event-generator.d.ts.map