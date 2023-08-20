import address from '../../assets/Logos/home.png';
import email from '../../assets/Logos/email.png';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="text-white lg:mt-20">
            <h3 className="text-2xl text-sky-500 font-bold text-center mt-10"><span className="text-2xl font-bold text-white mr-2">--</span>Contact<span className="text-2xl font-bold text-white ms-2">--</span></h3>
            <h3 className="text-3xl font-bold mt-5 text-center">Don't be shy! Hit me up! 👇</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20 mt-10 gap-8">
                <div className="flex justify-center">
                    <img className='w-12 mr-3' src={address} alt="" />
                    <div>
                        <h3 className='font-bold text-sky-500'>Address</h3>
                        <p>Dhaka, Bangladesh.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img className='w-12 mr-3' src={email} alt="" />
                    <div>
                        <h3 className='font-bold text-sky-500'>Mail</h3>
                        <p><Link to="https://mail.google.com/mail/u/0/#inbox?compose=new" className='hover:text-red-500'>jfmemon1999@gmail.com</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;