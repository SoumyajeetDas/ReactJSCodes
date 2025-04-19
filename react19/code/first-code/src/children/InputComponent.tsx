import { ComponentPropsWithRef } from 'react';

const InputComponent = (props: ComponentPropsWithRef<'input'>) => {
  return <input {...props} />;
};

export default InputComponent;
