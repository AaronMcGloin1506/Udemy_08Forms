import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormThree = () => {

    const formikProps = {
        initialValues:{ firstname:'',color:'', lastname:'',age:''},
        validationSchema: Yup.object({
            firstname: Yup.string().required('Sorry, this is required'),
            lastname: Yup.string().required('Sorry, this is required'),
            age: Yup.string().required('Sorry, this is required')
        }),
        onSubmit: values => {
            console.log(values)
        }
    }

    const formikInputCustomField = ({
        field, //{name,value,onChange,onBlur}
        form: { touched, errors },
        ...props
    }) => (
        <>
            <label htmlFor={field.name}>{props.labelName}</label>
            <input
                type="text"
                className="form-control"
                placeholder={props.placeholder}
                {...field}
            />
            {errors[field.name] && touched[field.name] ?
                <span>{errors[field.name]}</span>
                :null

            }
                
        </>
    )
    return(
        <Formik {...formikProps}>
            { formik => (
                <div className="container">
                    <div className="col-md-12 mt-5">
                        <Form>
                            <label htmlFor="firstname">First name</label>
                            <Field name="firstname" type="text" className="form-control"  />
                            {formik.values.firstname}
                            <ErrorMessage name="firstname" />
                            { formik.errors.firstname && formik.touched.firstname ? 
                            <span>{formik.errors.firstname}</span>  
                            :null}
                            {/* <input 
                                className="form-control" 
                                type="text" 
                                name="firstname"
                            /> */}

                            <hr className="mb-4" />
                            <label htmlFor="color">Color </label>
                            <Field
                                as="select"
                                name="color"
                                className="custom-select"
                            >
                                <option value="red">Red</option>    
                                <option value="green">Green</option> 
                                <option value="blue">Blue</option> 
                            </Field>

                            <hr className="mb-4" />
                            <Field
                                name="lastname"
                                component={formikInputCustomField}
                                placeholder="Last Name"
                                labelName="Enter Your Last name" />

                            <hr className="mb-4" />
                            <Field
                                name="age"
                                component={formikInputCustomField}
                                placeholder="put your age"
                                labelName="Enter Your Age" />     
                            
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            )}
            
        </Formik>
        
        
    )
}

export default FormThree;