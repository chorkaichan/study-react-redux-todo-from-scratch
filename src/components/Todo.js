import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';

const Todo = ({ text, onClick }) => (
  <Card onClick={onClick}>
    <CardContent>
      <Typography>
        {text}
      </Typography>
    </CardContent>
  </Card>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
