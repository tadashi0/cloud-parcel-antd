import { forwardRef, Ref, useImperativeHandle, useRef } from "react"

interface IFancyInputProps {
    name: string
}

interface IFancyInputRef {
    focus: () => void;
}

const useFancyInput = (props: IFancyInputProps, ref: Ref<IFancyInputRef>) => {
    const inputEl = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
        focus: () => {
            if (inputEl && inputEl.current) {
                inputEl.current.focus();
            }
        }
    }));
    return (
        <input ref={inputEl} type="text" defaultValue={props.name} />
    );
}

const FancyInput = forwardRef<IFancyInputRef, IFancyInputProps>(useFancyInput)

const ExampleUseImperativeHandle = () => {
    const fancyRef = useRef<IFancyInputRef>(null)
    return (
        <>
            <FancyInput ref={fancyRef} name='icepy' />
            <button onClick={() => {
                if (fancyRef && fancyRef.current) {
                    fancyRef.current.focus()
                }
            }}>
                +
            </button>
        </>
    )
}

export default ExampleUseImperativeHandle