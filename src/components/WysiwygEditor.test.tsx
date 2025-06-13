import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditorState } from 'draft-js';
import WysiwygEditor from './WysiwygEditor';

describe('WysiwygEditor - Toolbar Actions', () => {
  it('should call onChange when Bold button is clicked', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    const editorState = EditorState.createEmpty();

    render(
      <WysiwygEditor
        value={editorState}
        onChange={onChangeMock}
      />
    );

    const boldButton = screen.getByText(/bold/i);
    await user.click(boldButton);

    expect(onChangeMock).toHaveBeenCalled();
  });
});
