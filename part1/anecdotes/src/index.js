import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ callback, text }) => {
  return <button onClick={callback}>{text}</button>;
};

const App = ({ anecdotes }) => {
  const nAnecdotes = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(nAnecdotes)).map(Number.prototype.valueOf, 0)
  );

  return (
    <>
      <h1>Random Anecdote</h1>
      <div>{anecdotes[selected]}</div>
      <div>Votes: {' ' + votes[selected]}</div>
      <Button
        callback={() => setSelected(Math.floor(Math.random() * nAnecdotes))}
        text="Next anecdote"
      />
      <Button
        callback={() => {
          const newArr = [...votes];
          newArr[selected] += 1;
          setVotes(newArr);
        }}
        text="Vote for Anecdote"
      />

      <h1>Most Voted Anecdote</h1>
      <div>{anecdotes[votes.indexOf(Math.max(...votes))]}</div>
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
