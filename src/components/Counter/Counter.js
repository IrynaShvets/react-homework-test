import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 

//------------------------------------------------------------------------------
 
// функція redux без файлів Controls.js i Value.js

/* import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';

function Counter({ value, step, onDecrement, onIncrement }) {
  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={() => onDecrement(step)}>
        Уменьшить на {step}
      </button>
      <button type="button" onClick={() => onIncrement(step)}>
        Увеличить на {step}
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
 */

//------------------------------------------------------------------------

//реакт хуки

/* import React, { useState, useEffect } from 'react';

const styles = {
  btn: {
    display: 'inline-flex',
    fontSize: 20,
    margin: 4,
    cursor: 'pointer',
  },
};

// Первый рендер
// Каждый рендер
// Каждый рендер при изменении какого-то стейта или пропса
// Последний рендер

export default function Counter() {
  const [counterA, setCounterA] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const [counterB, setCounterB] = useState(0);

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  useEffect(() => {
    document.title = `Кликнули ${counterA + counterB} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>

    </>
  );
}
 */
