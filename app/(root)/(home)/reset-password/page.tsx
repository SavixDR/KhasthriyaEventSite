'use client';
import { useState, useEffect, FormEvent } from 'react';

const ResetPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const email: string | null = new URLSearchParams(window.location.search).get('email');

    useEffect(() => {
        // Check if email is present in the URL query
        if (!email) {
            setMessage('Invalid or missing email.');
        }
    }, [email]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage('An error occurred while resetting the password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
            <div className="lg:w-[368px] xl:w-[368px] max-w-sm p-6 border border-[#FFD700] rounded-3xl shadow-lg bg-gray-900">
                <h1 className="text-lg xl:text-lg font-extrabold text-[#FFD700] mb-6 text-center">
                    Reset Your Password
                </h1>
                {message && <p className="mb-4 text-center text-xs text-gray-400">{message}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="New Password" 
                        required 
                        className="w-full px-4 py-3 mb-4 rounded-lg bg-gray-800 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder="Confirm Password" 
                        required 
                        className="w-full px-4 py-3 mb-4 rounded-lg bg-gray-800 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-[#FFD700] text-gray-800 font-semibold hover:bg-[#b49e1f] transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none"
                    >
                        {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
