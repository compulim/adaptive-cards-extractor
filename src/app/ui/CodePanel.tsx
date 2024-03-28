import { useCallback, type FormEventHandler } from 'react';
import { useRefFrom } from 'use-ref-from';

import './CodePanel.css';

type Props = {
  name?: string;
  onInput?: (value: string) => void;
  readOnly?: boolean;
  value: string;
};

const CodePanel = ({ name, onInput, readOnly, value }: Props) => {
  const onInputRef = useRefFrom(onInput);

  const handleInput = useCallback<FormEventHandler<HTMLTextAreaElement>>(
    ({ currentTarget: { value } }) => onInputRef.current?.(value),
    [onInputRef]
  );

  return (
    <div className="code-panel">
      <textarea
        autoFocus={true}
        className="code-panel__text-area"
        onInput={handleInput}
        readOnly={readOnly}
        value={value}
      />
      <div className="code-panel__name">{name}</div>
    </div>
  );
};

export default CodePanel;
