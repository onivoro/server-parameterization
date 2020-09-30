export abstract class Parameter<T> {
    key() {
        return this.transform(this.id());
    }

    abstract value(): T;
    protected abstract id(): string;
    protected abstract transform(id: string): string;
}