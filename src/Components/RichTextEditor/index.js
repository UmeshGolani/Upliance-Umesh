import React, { useState } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = ({ initialContent, onChange }) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      const contentState = convertFromRaw(JSON.parse(initialContent));
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  const handleEditorChange = (state) => {
    setEditorState(state);
    if (onChange) {
      const contentState = state.getCurrentContent();
      const content = JSON.stringify(convertToRaw(contentState));
      onChange(content);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          padding: "1rem",
          width: "50%",
          minWidth: "400px",
        }}
      >
        <Editor
          editorState={editorState}
          wrapperStyle={{ display: "flex", flexDirection: "column" }}
          toolbarStyle={{ marginBottom: "1rem" }}
          editorStyle={{ flexGrow: 1 }}
          onEditorStateChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
