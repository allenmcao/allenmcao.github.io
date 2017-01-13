import React from 'react';

export default class NotFound {
    render () {
        return (
            <div className='not-found'>
                404: It appears you have lost your way
                <br/>
                <span>
                    Return to safety <a href='/'>here.</a>
                </span>
            </div>
        );
    }
}