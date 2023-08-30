import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [image, setImage] = useState(false);

  return (
    <Context.Provider value={{ image, setImage }}>
      {props.children}
    </Context.Provider>
  );
};
