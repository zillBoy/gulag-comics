import React from 'react'
import { Container, Label, Input, Icon } from './StyledComponents/InputContent'

const InputContent = ({ label, id, type, placeholder, autoFocus, width, name, setName, borderTopRight, borderBottomRight, showPass, setShowPass, children }) => {
    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <Input autoFocus={autoFocus} id={id} type={showPass ? 'text' : type} value={name} onChange={e => setName(e.target.value)} placeholder={placeholder} width={width} borderTopRight={borderTopRight} borderBottomRight={borderBottomRight} />
            {children && <Icon onClick={() => setShowPass(prevState => !prevState)}>
                {children}
            </Icon>}
        </Container>
    )
}

export default InputContent
