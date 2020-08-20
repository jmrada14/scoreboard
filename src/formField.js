import React from 'react'
import { Form} from "react-bootstrap";

const FormField = ({name, onChange,label, value, pattern, type}) => {
    return(
        <div>
            <div
                    className="h-100 "
                    style={{ margin: "0 auto" }}
                  >
                    {label}
                  </div>
                  
              <Form>
                <Form.Group>
                  <Form.Control
                    name={name}
                    size="sm"
                    value={value}
                    pattern={pattern}
                    type={type}
                    placeholder=""
                    onChange={onChange}
                  />
                </Form.Group>
              </Form>
            </div>
    )
}

export default FormField
