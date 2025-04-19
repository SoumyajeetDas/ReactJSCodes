import { ComponentPropsWithRef } from 'react';

// We don't have to do a forwardRef now in React19. Refs can be passed as props.
const InputComponent = (props: ComponentPropsWithRef<'input'>) => {
  return <input {...props} />;
};

export default InputComponent;
