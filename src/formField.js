import React from 'react'
import { Form} from "react-bootstrap";

const FormField = ({name, onChange,label}) => {
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
                    size="lg"
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