import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent: any, incrementBy: any) => {
  function NewComponent(props: any) {
    const [counter, setCounter] = useState(10);

    //render new component and pass on its props
    return (
      <OriginalComponent
        counter={counter}
        incrementCounter={() => setCounter((counter) => counter + incrementBy)}
        name="Log Rocket"
        {...props}
      />
    );
  }

  return NewComponent;
};

export default UpdatedComponent;
