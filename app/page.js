"use client"
import { useState, useEffect } from 'react';
import Editor from '../components/QuillEditor';
import IPapersize, { A3, A4 } from './../interface/paperSize';

// import PaperSizePicker from '@/components/PaperSizePicker';
import { Select } from 'antd';

function HomePage() {
  const [content, setContent] = useState('');
  const [paperSize, setPaperSize] = useState(A4);



  const handlePaperSizeChange = (value) => {
    const selectedPaperSize = value;
    if (selectedPaperSize === 'A3') {
      setPaperSize(A3);
    } else if (selectedPaperSize === 'A4') {
      setPaperSize(A4);
    }
  };

  const handleContentChange = (value) => {
    setContent(value);
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-row'>
        <label>Paper size:</label>&nbsp;
        <Select
          defaultValue="A4"
          title='Paper size: '
          size='small'
          onChange={handlePaperSizeChange}
          options={IPapersize.map(item => {
            return {
              value: item.name,
              label: item.name,
            };
          })}
        />
      </div>
      <Editor
        value={content}
        onChange={handleContentChange}
        height={paperSize.height}
        width={paperSize.width} />
    </main>
  );
}

export default HomePage;