import React from 'react';
import Notification from './notification'

export const WarningNotification = () =>
    <Notification type='warning-notification' duration={5}>
        <div>
            <h4>oh God something went horribly wrong !!!!</h4>
        </div>
    </Notification>;