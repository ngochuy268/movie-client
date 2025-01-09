import { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { validateFormData } from '../../models/Footer/contactModel';

const useFooterController = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const captchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateFormData(formData)) {
            toast.error('Please fill in all fields!'); 
            return;
        }

        if (!captchaValue) {
            toast.error('Please verify that you are not a robot!');
            return;
        }

        axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, {
            ...formData,
            captcha: captchaValue
        })
            .then(response => {
                console.log('Success:', response.data);
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                captchaRef.current.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Failed to send message. Please try again.');
            });
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        captchaRef,
        handleCaptchaChange
    };
};

export default useFooterController;