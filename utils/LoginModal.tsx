import React, { useEffect } from 'react'
import ReactPortal from './ReactPortal';

interface LoginModalProps {
    children: React.ReactElement;
    isOpen: boolean;
    handleClose: () => void;
}

const LoginModal = ({
    children,
    isOpen,
    handleClose
}: LoginModalProps) => {

    useEffect(()=> {
        const closeOnEscapeKey = (e: KeyboardEvent) => {
            e.key === 'Escape' ? handleClose() : null;
        }
        document.body.addEventListener('keydown',closeOnEscapeKey);
        return () => document.body.removeEventListener('keydown',closeOnEscapeKey);
    },[handleClose])
   
    useEffect(()=> {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    },[isOpen])
    
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div 
            className='fixed inset-0 bg-black opacity-50' 
            onClick={handleClose}
          />
          <div className='bg-white rounded-lg shadow-lg p-6 relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
            {children}
          </div>
        </div>
    </ReactPortal>
  )
}

export default LoginModal