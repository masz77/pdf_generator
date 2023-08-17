import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function Editor({ value, onChange, height, width }) {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <div className="editor-container">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        style={{ height: height, width: width }}
          />
          <style jsx>{`
        .editor-container {
          margin-top: 16px;
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  );
}

export default Editor;