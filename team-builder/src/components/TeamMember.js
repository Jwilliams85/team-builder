import React from 'react';
import { exportAllDeclaration } from '@babel/types';

const TeamMember = props => {
  const { name, email, role } = props.memberInfo;

  return (
    <div className='my-4 p-4 max-w-full border border-full rounded border-gray-900'>
      <h2 className='name'>{name}</h2>
      <h4>{role}</h4>
      <a href={`mailto:${email}`} className='email'>
        {email}
      </a>
      <div className='button'>
        <button
          className='button1'
          onClick={() => props.edit(props.memberInfo)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TeamMember;