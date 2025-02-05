import React from 'react';

import PropTypes from 'prop-types';

export const ToDo = ({id, todo}) => { 
  return (
    <div>
        <input type='checkbox' id={id} />
        {todo}
    </div>
  );
};

ToDo.propTypes = {
  id: PropTypes.string,
  todo: PropTypes.string
};
