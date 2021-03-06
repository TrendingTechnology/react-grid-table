import React from 'react';
import useDetectClickOutside from '../hooks/useDetectClickOutside';

const PopoverButton = props => {

    const { ref, isComponentVisible, setIsComponentVisible } = useDetectClickOutside(false);

    let {
        buttonChildren, 
        popoverChildren
    } = props;
    
    return (
        <div ref={ref} className='rgt-columns-manager-wrapper'>
            <button className='rgt-columns-manager-button' onClick={e => setIsComponentVisible(!isComponentVisible)}>
                { buttonChildren }
            </button>
            <div className={`rgt-columns-manager-popover${isComponentVisible ? ' rgt-columns-manager-popover-open' : ''}`}>
                { popoverChildren }
            </div>
        </div>
    )
}

export default PopoverButton;