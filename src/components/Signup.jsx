import React from 'react'

const Signup = () => {
    return <div>
        <form className='max-w-md m-auto pt-24' >
            <h2 className='font-bold pb-2'>Sign up today!</h2>
            <p>Already have an account? <Link to='/components/signin'>Sign in!</Link></p>
        </form>
    </div>;

};

export default Signup