import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      const contentState = convertFromRaw(JSON.parse(savedContent));
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      const contentState = convertFromRaw(JSON.parse(savedContent));
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  const handleEditorChange = (state) => {
    setEditorState(state);
    const contentState = state.getCurrentContent();
    localStorage.setItem('editorContent', JSON.stringify(convertToRaw(contentState)));
  };

  return (
    <div className="bg-white p-4 border rounded">
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        wrapperStyle={{ border: "1px solid black", backgroundColor: "white", padding: "1rem" }}
        editorStyle={{ minHeight: "300px" }}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
          inline: { options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'] },
          list: { options: ['unordered', 'ordered'] },
          textAlign: { options: ['left', 'center', 'right', 'justify'] },
          link: { options: ['link'] },
          embedded: { options: ['embedVideo'] },
          image: { uploadEnabled: true, previewImage: true, alignmentEnabled: true, inputAccept: 'image/*', alt: { present: false, mandatory: false } },
        }}
        onEditorStateChange={handleEditorChange}
      />
    </div>
  );
};

export default RichTextEditor;
