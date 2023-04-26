import React from 'react';

// const RoundedButton = ({content }) => {
//   return (
//     <div className={`rounded_button`}>
//       <span>{content}</span>
//     </div>
//   );
// };

const RoundedButton = ({ className, content }) => {
  return (
    <div className={`rounded_button ${className}`}>
      <span>{content}</span>
    </div>
  );
};

export default RoundedButton;
