import React from 'react';
import './quotes.css'
import Display from '../Display/Display'

const Quotes = () => {
    
    const refresh = () =>{
        window.location.reload()
    }

    return (
        <div className="quotes-container">
            <div className="center">
                <div className="center-img">
                    <img alt="quotes" src="/images/icon.png" height='30px' width='30px' />
                </div>
                <div className="quotes-heading" id="copytext">
                    <Display/>
                </div>
            </div>
            
            <div className='copyText'>
                copyText
            </div>

            <button onClick={refresh} className='reload'>
                Refresh
            </button>
        </div>
    );
};

export default Quotes;