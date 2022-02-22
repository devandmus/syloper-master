import React from 'react';
import { SectionTitle } from '../styles';
import { MdDateRange } from 'react-icons/md'
import { DateInfo } from './styles';
import { dateFormatter } from '../../../../../utils/date'

const DueDate = ({due_date}) => {

    return ( 
        <div>
            <SectionTitle>
                <i><MdDateRange /></i>
                <h5>Due Date</h5>
            </SectionTitle>
            <DateInfo>{dateFormatter(due_date)}</DateInfo>
        </div>
     );
}
 
export default DueDate;
