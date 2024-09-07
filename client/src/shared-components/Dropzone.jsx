import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Text } from 'shadcn';

const Dropzone = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <Box
      {...getRootProps()}
      p={4}
      border={isDragActive ? '2px dashed #000' : '2px solid #000'}
      borderRadius={4}
      textAlign="center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>Drop the files here...</Text>
      ) : (
        <Text>Drag and drop files here, or click to select files</Text>
      )}
    </Box>
  );
};

export default Dropzone;