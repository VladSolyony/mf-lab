import { useState, type FC } from "react";

class Test {
    ref: HTMLInputElement | null = null;
    constructor() {
        this.setRef = this.setRef.bind(this);
        this.focus = this.focus.bind(this);
    }

    setRef(ref: HTMLInputElement | null) {
        this.ref = ref;
    }

    focus() {
        this.ref?.focus();
    }
}

export const Widget: FC = () => {
    const [state, setState] = useState(true);
    const test = new Test();

    return (
        <section>
            <h2>Remote Section</h2>
            {state ? <input ref={test.setRef} value={1} /> : <input ref={test.setRef} value={2} />}
            <button onClick={
                () => setState(prev => !prev)
            }>
                render
            </button>
            <button onClick={() => {
                test.focus();
            }}>
                focus
            </button>
        </section>
    );
};
