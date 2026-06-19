//# Components //
import Text from '../text'
//# Types //
import type { InputsController } from '../../../shared/types/FormController'
//# Classes //
import './select.scss'

type option = {
    label: string
    value: string | number
}

type input = {
    /** name of the select, used in 'data' from 'FormController' Hook */
    name: string
    /** additional CSS classes to apply */
    className?: string
    /** options of the select */
    options?: option[]
    /** text shown as the default placeholder option */
    label?: string
    /** aria-label of the select */
    ariaLabel?: string
    /** controller object containing InputsController from 'FormController' Hook */
    InputsController: InputsController
}


export default function Input({ name, className = '', options, label, ariaLabel, InputsController }: input) {

    return (
        <>
            <select
                name={name}
                aria-label={ariaLabel}
                className={`select ${className}`}
            >
                <option value="" disabled selected>
                    <Text tag='span'>
                        {label || 'Select'}
                    </Text>
                </option>
            </select >
        </>
    )
}