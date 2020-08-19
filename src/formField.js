import React from 'react'
import { Form} from "react-bootstrap";

const FormField = ({name, onChange,label, value, pattern}) => {
    return(
        <div>
            <div
                    className="h1 border border-black "
                    style={{ margin: "0 auto" }}
                  >
                    {label}
                  </div>
                  
              <Form>
                <Form.Group>
                  <Form.Control
                    name={name}
                    size="md"
                    value={value}
                    pattern={pattern}
                    type="text"
                    placeholder="Large text"
                    onChange={onChange}
                  />
                </Form.Group>
              </Form>
            </div>
    )
}

export default FormField