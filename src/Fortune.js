import React from 'react';

const Fortune = (props) => {
  const { fortune } = props;
  return (
    <ul>
      <h2>Fortune of the Day</h2>
      {fortune.body}
    </ul>
  );
};
export default Fortune;