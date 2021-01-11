import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";


const FormCon = (props) => {
    return <div> {props.children}</div>
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <div>
        <FormCon {...props}><TextField  {...input} {...restProps}
                                        multiline/></FormCon>
    </div>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormCon {...props}><TextField {...input} {...restProps}/></FormCon>
}

export const Check = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormCon {...props}><FormControlLabel control={
        <Checkbox {...input} {...restProps} color="primary"inputProps={{'aria-label': 'secondary checkbox'}}/>}
                                                 label='Remember me'/></FormCon>
}
export const Checked = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormCon {...props}><FormControlLabel control={<Checkbox {...input} {...restProps} color="primary"
                                                                    inputProps={{'aria-label': 'secondary checkbox'}}
    />}/></FormCon>
}

export const Pass = (props) => {
    const {input, meta, child, ...restProps} = props
    const hasError = props.meta.touched && props.meta.error
    if (hasError) {
        return <FormCon {...props}><TextField {...input} {...restProps} id="standard-password-input"
                                              label="Password" type="password" autoComplete="current-password"
                                              defaultValue="Error" error inputProps={{ 'aria-label': 'description' }}
        /></FormCon>
    } else {
        return <FormCon {...props}><TextField {...input} {...restProps} id="standard-password-input"
                                              label="Password" type="password"
                                              autoComplete="current-password"
        /></FormCon>
    }
}


export const Log = (props) => {
    const {input, meta, child, ...restProps} = props
    const hasError = props.meta.touched && props.meta.error;
    if (hasError) {
        return  <FormCon {...props}><TextField {...input} {...restProps} label="Email" id="standard-basic"
                                           defaultValue="Error" error inputProps={{ 'aria-label': 'description' }}
        /></FormCon>
    } else {
        return  <FormCon {...props}><TextField {...input} {...restProps} label="Email" id="standard-basic"
        /></FormCon>
    }
}