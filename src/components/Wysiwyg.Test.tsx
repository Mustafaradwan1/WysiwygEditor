import { render, fireEvent } from '@testing-library/react';
import { EditorState } from 'draft-js';
import WysiwygEditor from './WysiwygEditor';
import '@testing-library/jest-dom';
test('should apply bold style when Bold button is clicked', () => {
  const onChangeMock = jest.fn();
  const editorState = EditorState.createEmpty();
  const { getByText } = render(
    <WysiwygEditor value={editorState} onChange={onChangeMock} />
  );
  const boldBtn = getByText('Bold');
  fireEvent.mouseDown(boldBtn); 
  expect(onChangeMock).toHaveBeenCalled(); 
});
