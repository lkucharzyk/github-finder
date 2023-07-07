import React, {Fragment} from 'react';
import spinnerg from './spinnerg.gif';

 const Spinner = () =>

    <Fragment>
        <img src={spinnerg} alt='Loading' style={{width: '200px', margin: 'auto', display: 'block' }}/>
    </Fragment>


export default Spinner;