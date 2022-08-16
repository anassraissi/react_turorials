import React from "react";
import { Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from 'yup';

export  default function Userform(props){

            const schema=yup.object().shape({
                    name: yup.string().required(),
                    email: yup.string().required()

            })
    return <Formik
               enableReinitialize={true}  // hadi katkhali rechargemet dyal data jdida tkhdam
                initialValues={props.value}
                onSubmit={props.onSubmit}
                validationSchema={schema}
                render={props=>{
                     return <Form>
                         <div>  <label>Name : </label>
                          <Field name={'name'}/>
                          <ErrorMessage name="name"/>
                          </div>

                         <div>
                         <label>Email : </label>
                          <Field name={'email'}/>
                          <ErrorMessage name="email"/>
                          </div>
                        
                         

                          <button type="submit">Send</button>
                    
                     </Form>
                }}
            />
}


