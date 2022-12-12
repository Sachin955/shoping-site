import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
const Contact = () => {
    return (
        <div className="contact">
            <div className='contact-form'>

                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;