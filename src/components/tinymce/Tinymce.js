import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { TINYMCE_API_KEY } from "../../utils/config/config";
import { file_picker_callback } from "./helper";

import { getActiveMenubarItems } from "./settings/menubar";
import { getActiveToolbarItems } from "./settings/toolbar";
import { getActivePluginsItems } from "./settings/plugins";
import {
  contentStyle,
  editorHeight,
  editorInitialValue,
} from "./settings/generalSettings";
import ButtonComp from "../Button";

const initialValue = editorInitialValue;
const menubar = getActiveMenubarItems();
const toolbar = getActiveToolbarItems();
const plugins = getActivePluginsItems();

export default function TinymceComp() {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey={TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          skin: "oxide-dark",
          content_css: "dark",
          plugins: plugins,
          menubar: menubar,
          toolbar: toolbar,
          height: editorHeight,
          content_style: contentStyle,
          // images_upload_handler: handleImageUpload,
          file_picker_callback: file_picker_callback,
        }}
      />

      <ButtonComp variant="outlined" fullWidth={true} onClick={log}>
        Log editor content
      </ButtonComp>
    </>
  );
}
