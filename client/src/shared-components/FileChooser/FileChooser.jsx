import { useState, useCallback } from 'react'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card'
import { CloudUploadIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDropzone } from 'react-dropzone'
import generateId from '@/plugins'
import CustomButton from '../CustomButton'
import { useEffect } from 'react'

/**
 * FileChooser component allows users to upload files by dragging and dropping or by clicking to select files.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} [props.heightContainer='h-60'] - Height of the container.
 * @param {string} [props.title='Upload Files'] - Title of the card.
 * @param {string} [props.description='Drag and drop files here or click to select files to upload.'] - Description of the card.
 * @param {string} [props.unAvailableDragDescription='Drag and drop files here or click to select files'] - Description shown when drag is unavailable.
 * @param {string} [props.buttonText='Upload'] - Text for the upload button.
 * @param {function} [props.onGetFiles=null] - Callback function to get the uploaded files.
 *
 * @returns {JSX.Element} The FileChooser component.
 */

export default function FileChooser({
	heightContainer = 'h-60',
	title = 'Upload Files',
	description = 'Drag and drop files here or click to select files to upload.',
	unAvailableDragDescription = 'Drag and drop files here or click to select files',
	buttonText = 'Upload',
	onGetFiles = null,
}) {
	const [files, setFiles] = useState([])
	const [mouseEvents, setMouseEvents] = useState({
		mouseDown: false,
		mouseUp: false,
		mouseOver: false,
		mouseOut: false,
	})

	const onDrop = useCallback((acceptedFiles) => {
		const filesWithId = acceptedFiles.map((file) => ({
			id: generateId(),
			file,
		}))
		setFiles(filesWithId)
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	useEffect(() => {
		if (typeof onGetFiles === 'function') {
			onGetFiles(files)
		}
	}, [files, onGetFiles])

	return (
		<Card className="w-full max-w-md">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div
					{...getRootProps()}
					className={`flex ${heightContainer} items-center justify-center rounded-md border-2 border-dashed ${
						isDragActive ? 'border-primary' : 'border-muted'
					} transition-colors`}>
					<input {...getInputProps()} />

					{files.length > 0 ? (
						<div className={`grid gap-2 ${heightContainer} p-3 overflow-y-auto scroll-smooth`}>
							{files.map((file) => {
								const { size, name } = file.file
								return (
									<div
										key={file.id}
										className="flex items-center justify-between rounded-md bg-muted/40 px-4 py-2 min-w-0 mb-1">
										<small className="truncate ">{name}</small>
										<div className="flex flex-row gap-x-1 items-center">
											<div className="text-xs text-muted-foreground w-full px-1">
												{size} b{' '}
											</div>
											<Button
												onClick={(e) => {
													e.stopPropagation()
													console.log('id:', file.id)
													setFiles((prevFiles) =>
														prevFiles.filter((f) => f.id !== file.id),
													)
												}}
												className="h-7 w-9"
												variant="outline"
												size="icon">
												<XIcon className="h-4 w-4" />
											</Button>
										</div>
									</div>
								)
							})}
						</div>
					) : (
						<div className="text-center">
							<CloudUploadIcon className="mx-auto h-8 w-8 text-muted-foreground" />
							<p className="mt-4 text-sm text-muted-foreground">
								{unAvailableDragDescription}
							</p>
						</div>
					)}
				</div>
			</CardContent>
			<CardFooter>
				<CustomButton
					onMouseLeave={() =>
						setMouseEvents((prev) => ({ ...prev, mouseOver: false }))
					}
					onMouseOver={() =>
						setMouseEvents((prev) => ({ ...prev, mouseOver: true }))
					}
					startIcon={
						<div className="">
							<CloudUploadIcon
								className={`${mouseEvents.mouseOver ? 'animate-bounce' : ''}`}
								size={22}
							/>
						</div>
					}
					text={buttonText}
				/>
			</CardFooter>
		</Card>
	)
}
