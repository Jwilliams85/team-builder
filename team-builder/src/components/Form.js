import React, { useState, useEffect } from 'react';

const Form = props => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    if (props.memberToEdit) setInputValue(props.memberToEdit);
  }, [props.memberToEdit]);

  useEffect(() => {
    if (props.memberToEdit) setInputValue(props.memberToEdit);
  }, [props.memberToEdit]);

  const submit = e => {
    e.preventDefault();
    if (props.memberToEdit) props.editMember(inputValue);
    else props.addMember(inputValue);
    setInputValue({
      name: '',
      email: '',
      role: ''
    });
  };

  return (
    <div className='submit-name'>
      <form onSubmit={e => submit(e)}>
        <div className='Name'>
          <label className='form-name'>Full Name {" "} </label>
          <input
            type='text'
            placeholder='Type Name'
            value={inputValue.name}
       //className='border rounded border-full border-gray-200 p-1 w-1/3'
            onChange={e =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
          />
        </div>
        <div className='submit-email'>
          <label className='form-email'>Email {" "} </label>
          <input
            type='email'
            placeholder='full.name@lambda.com'
            value={inputValue.email}
           // className='border rounded border-full border-gray-200 p-1 w-1/3'
            onChange={e =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
          />
        </div>
        <div className='submit-role'>
          <label className='form-role'>Role {""} </label>
          <select
            value={inputValue.role}
           // className='border rounded border-full border-gray-200'
            onChange={e =>
              setInputValue({ ...inputValue, role: e.target.value })
            }
          >
            <option value='' selected='selected' hidden='hidden'>
              Choose...
            </option>
            <option value='UI Developer'>UI Developer</option>
            <option value='Front-End Engineer'>Front-End Engineer</option>
            <option value='Back-End Engineer'>Back-End Engineer</option>
            <option value='UX Designer'>UX Designer</option>
            <option value='Team Lead'>Team Lead</option>
          </select>
        </div>
        <div className='buttons my-4 mx-auto'>
          <button
            className={`border-2 rounded border-full border-gray-400 py-1 px-4 text-lg cursor-pointer${
              +(
                inputValue.name === '' ||
                inputValue.email === '' ||
                inputValue.role === ''
              )
                ? ' opacity-50 cursor-not-allowed'
                : ' hover:bg-blue-200'
            }`}
            type='submit'
            onSubmit={e => submit(e)}
          >
            {props.memberToEdit ? 'Update' : 'Add'}
          </button>
          {/* <input className='formButton' type='reset' onClick={resetForm} /> */}
        </div>
      </form>
    </div>
  );
};

export default Form;








