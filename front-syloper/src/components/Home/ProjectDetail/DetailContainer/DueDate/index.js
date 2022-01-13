import React from 'react';
import { SectionTitle } from '../styles';
import { MdDateRange } from 'react-icons/all'
import { DateInfo } from './styles';

const DueDate = () => {
    return ( 
        <div>
            <SectionTitle>
                <i><MdDateRange /></i>
                <h5>Due Date</h5>
            </SectionTitle>
            <DateInfo>Fri, October 4, 2021</DateInfo>
        </div>
     );
}
 
export default DueDate;