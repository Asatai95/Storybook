import React from 'react';
import { Box, TextField, Checkbox, Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';

function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <Box className={`list-item ${state}`}>
            <label className='checkbox'>
                <Checkbox
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <Box className="title">
                <TextField id="standard-basic" label="Standard" value={title} readOnly={true} />
            </Box>
            <Box className="actions" onClick={e => e.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <Link onClick={() => onPinTask(id)}>
                        <span className= "icon-star" />
                    </Link>
                )}
            </Box>
        </Box>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state : PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}

export default Task;