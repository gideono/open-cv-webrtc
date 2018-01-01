import React from 'react';
import Notification from './Notification'

export const WarningNotification = () =>
    <Notification type='warning-notification' duration={5}>
        <div>Oh God !!! something went horribly wrong</div>
    </Notification>;