import React from 'react';
import { SectionTitle } from '../styles';
import { BsCardText } from 'react-icons/all'
import { DescriptionTxt } from './styles';

const Description = () => {
    return ( 
        <div>
            <SectionTitle>
                <i><BsCardText /></i>
                <h5>Description</h5>
            </SectionTitle>
            <DescriptionTxt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem odio, dapibus non nisi id, volutpat egestas diam. Pellentesque leo nisl, gravida et luctus nec, volutpat sed lorem. Morbi euismod vehicula molestie. Curabitur rutrum odio in accumsan cursus. Proin semper sapien ac lacus condimentum finibus. Nam id ante sit amet lorem consectetur pulvinar ut ornare nunc. Fusce venenatis lacus eget ligula egestas rutrum. Nulla a viverra libero. Mauris porta, turpis et egestas semper

            </DescriptionTxt>
        </div>
     );
}
 
export default Description;