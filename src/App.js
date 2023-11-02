import React, { useState, useEffect } from 'react';

function DynamicDocumentTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Счетчик: ${count}`
  }, [count])

  return (
      <div>
        <h1>заголовок</h1>
        <p>текущее значение : {count}</p>
        <button onClick={() => setCount(count + 1)}>увеличить</button>
      </div>
  )
}

export default DynamicDocumentTitle;

