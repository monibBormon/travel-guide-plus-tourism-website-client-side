import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { googleSignIn, setIsLoading } = useFirebase()
    const location = useLocation()
    const redirect_url = location.state?.from || '/'
    const history = useHistory()

    // hangle google
    const handleGoogleLogin = () => {
        setIsLoading(true)
        googleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <div className="container mx-auto my-20 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className='lg:col-span-1'></div>
                    <div style={{ transition: '.3s all' }} className="login-form shadow py-10 px-5 hover:shadow-lg text-center">
                        <h2 className='text-4xl text-green-500 mb-8'> Login to your account</h2>
                        <button onClick={handleGoogleLogin} className='text-xl capitalize border-2 py-1 px-5 rounded-full'><img className='w-12 inline-block' src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="" />continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;