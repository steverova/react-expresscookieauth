// import useDisclousure from '@/hooks/useDisclousure'
// import CustomButton from '@/shared-components/CustomButton'
// import { CustomDialog } from '@/shared-components/CustomDialog'
// import parse from 'html-react-parser'
// import 'katex/dist/katex.min.css'
// import { Cloud, ExternalLink, Eye } from 'lucide-react'
// import { useState } from 'react'
// import SunEditor from 'suneditor-react'
// import 'suneditor/dist/css/suneditor.min.css'
// import { options } from './EditorOptions'
// import './styles.css'

// export const Editor = () => {
// 	const [editorContent, setEditorContent] = useState('')
// 	const [previewContent, setPreviewContent] = useState('')
// 	const { handleCloseComponent, handleOpenComponent, open } = useDisclousure()

// 	const handleSave = () => {
// 		console.log('Saving content:', editorContent)
// 	}

// 	const handlePreview = () => {
// 		setPreviewContent(editorContent)
// 		handleOpenComponent()
// 	}

// 	return (
// 		<div className='text-editor h-full p-3 border'>
// 			<CustomDialog
// 				size='fullWidth'
// 				soloChildren
// 				open={open}
// 				handleClose={handleCloseComponent}>
// 				{parse(previewContent)}
// 			</CustomDialog>
// 			<div className='flex justify-end my-2 gap-x-2'>
// 				<CustomButton
// 					disabled={!editorContent}
// 					onClick={handleSave}
// 					iconSize='5'
// 					text='Save'
// 					endIcon={<Cloud />}
// 				/>
// 				<CustomButton
// 					disabled={!editorContent}
// 					onClick={handlePreview}
// 					iconSize='5'
// 					text='Preview'
// 					variant='outline'
// 					endIcon={<Eye />}
// 				/>
// 				<CustomButton iconSize='5' variant='icon' endIcon={<ExternalLink />} />
// 			</div>
// 			<SunEditor
// 				autoFocus={true}
// 				setOptions={options}
// 				onChange={(content) => setEditorContent(content)}
// 			/>
// 		</div>
// 	)
// }

// export default Editor

const Editor = () => {

	return (<div>hola</div>)
}

export default Editor
