import React from "react";

const useClassBody = (add, remove) => {
  React.useEffect(() => {
    const classesName = remove;
    classesName.forEach((name) => document.body.classList.remove(name));
    document.body.classList.add(add);
  }, [add, remove]);

  return null;
};

export default useClassBody;
