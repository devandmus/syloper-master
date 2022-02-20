import React from 'react';
import { SectionTitle } from '../styles';
import { BsCardText } from 'react-icons/bs'
import { DescriptionTxt } from './styles';

const Description = ({description}) => {
    return ( 
        <div>
            <SectionTitle>
                <i><BsCardText /></i>
                <h5>Description</h5>
            </SectionTitle>
            <DescriptionTxt>
            {description}

            </DescriptionTxt>
        </div>
     );
}
 
export default Description;
