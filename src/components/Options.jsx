/* eslint-disable react/prop-types */
export default function Options({ question, id }) {
  return (
    <div className='options'>
      {question.options.map((option) => (
        <button
          className='btn-option'
          key={id}>
          {option}
        </button>
      ))}
    </div>
  );
}
