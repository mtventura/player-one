import { Fragment } from "react"
import { StyledInput } from "../Input/Input.style"
import { StyledTextArea } from "../TextArea/TextArea.style"

const BillingInfo = ({className, billingInfo, setBillingInfo}) => {

    const onChangeNameHandler = (event) => {
        const newBillingInfo = {...billingInfo, name: event.target.value}
        setBillingInfo(newBillingInfo)
    }
    
    const onChangeLastNameHandler = (event) => {
        const newBillingInfo = {...billingInfo, lastName: event.target.value}
        setBillingInfo(newBillingInfo)
    }

    const onChangeAddressHandler = (event) => {
        const newBillingInfo = {...billingInfo, address: event.target.value}
        setBillingInfo(newBillingInfo)
    }

    const onChangeProvinceHandler = (event) => {
        const newBillingInfo = {...billingInfo, province: event.target.value}
        setBillingInfo(newBillingInfo)
    }
    
    const onChangeCityHandler = (event) => {
        const newBillingInfo = {...billingInfo, city: event.target.value}
        setBillingInfo(newBillingInfo)
    }

    const onChangePostalCodeHandler = (event) => {
        const newBillingInfo = {...billingInfo, postalCode: event.target.value}
        setBillingInfo(newBillingInfo)
    }

    const onChangePhoneHandler = (event) => {
        const newBillingInfo = {...billingInfo, phone: event.target.value}
        setBillingInfo(newBillingInfo)
    }

    const onChangeObservationsHandler = (event) => {
        const newBillingInfo = {...billingInfo, observations: event.target.value}
        setBillingInfo(newBillingInfo)
    }

    return (
        <Fragment>
            <div>
                <div style= {{display:"block"}}>
                    <h2>Detalle de facturación</h2>
                </div>
                <div style={{width: "75%", marginLeft:"auto", marginRight:"auto", display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                    
                    <div className={className}>
                        <label>Nombre *</label>
                        <StyledInput type="text" id="name" name="name" onChange={onChangeNameHandler} required/>
                    </div>
                    <div className={className}>
                        <label>Apellido *</label>
                        <StyledInput type="text" id="lastname" name="lastname" onChange={onChangeLastNameHandler} required/>
                    </div>       
                    <div className={className} style={{width:"100%"}}>
                        <label>Dirección *</label>
                        <StyledInput type="text" id="address" name="address" placeHolder="Calle, número, departamento, etc" onChange={onChangeAddressHandler} required/>
                    </div>
                    <div className={className}>
                        <label>Provincia *</label>
                        <StyledInput type="text" id="province" name="province" onChange={onChangeProvinceHandler} required/>
                    </div>
                    <div className={className}>
                        <label>Ciudad *</label>
                        <StyledInput type="text" id="city" name="city" onChange={onChangeCityHandler} required/>
                    </div>
                    <div className={className}>
                        <label>Código postal *</label>
                        <StyledInput type="text" id="postalCode" name="postalCode" onChange={onChangePostalCodeHandler} required/>
                    </div>
                    <div className={className}>
                        <label>Teléfono *</label>
                        <StyledInput type="text" id="phone" name="phone" onChange={onChangePhoneHandler} required/>
                    </div>
                    <div className={className} style={{width:"100%"}}>
                        <label>Observaciones</label>
                        <StyledTextArea id="observation" rows="5" onChange={onChangeObservationsHandler}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BillingInfo