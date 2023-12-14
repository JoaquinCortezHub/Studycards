import React, { useState } from 'react'
import { Button }from 'react-bootstrap'

const InputForm = ({onSubmit}) => {
    const [paragraph, setParagraph] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(paragraph);
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
                    placeholder='Enter your notes'
                    className='form-control rounded'
                    style={{ height: '200px' }}
                >
                </textarea>
                <br />
                <Button variant="primary" type="submit">Generate</Button>
            </form>
        </div>
    )
};

export default InputForm;
