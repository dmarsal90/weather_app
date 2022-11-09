import {Accordion} from 'react-accessible-accordion';
export const Forecast = () =>{
    return(
        <>
            <label className="title"> Daily</label>
            <Accordion allowZeroExpanded></Accordion>
        </>
    );
}