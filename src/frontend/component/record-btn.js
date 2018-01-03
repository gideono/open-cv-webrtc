import React from 'react'

export const RecordBtn = ({on, off}) => [
    <input key="record-btn" type="checkbox" id="record-btn" onChange={({target}) => target.checked ? on() : off()}/>,
    <label key="record-label" htmlFor="record-btn">
        <div><span></span></div>
    </label>
];