import { uploadImage, type PredictionResult } from '@/api'
import { useRef, useState } from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

const UploadSection = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [result, setResult] = useState<PredictionResult | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleUpload = async () => {
        if (!selectedFile) return

        try {
            const data = await uploadImage(selectedFile)
            setResult(data.results.result)
        } catch (error) {
            // TODO: Add proper error handling and UI
            console.error('Upload failed', error)
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-4 sm:mt-15">
            <input
                id="file-upload"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                title={selectedFile?.name}
                onChange={(e) => {
                    const file = e.target.files?.[0]
                    setSelectedFile(file || null)
                }}
                className="hidden"
            />
            <label
                htmlFor="file-upload"
                aria-label='Upload an image file'
                className="cursor-pointer border-1 border-dashed border-rose-700 text-rose-700 font-semibold px-4 py-10 rounded shadow-md hover:bg-rose-100 transition text-center w-[300px] truncate"
            >
                <span
                    title={selectedFile?.name}
                >
                    {selectedFile ? selectedFile.name : '📁 Choose an Image'}
                </span>

            </label>
            <div className=''>
                <Button
                    onClick={handleUpload}
                    text="Upload & "
                    highlight="Predict"
                    icon="🎨"
                    backgroundUrl="https://png.pngtree.com/thumb_back/fh260/background/20240103/pngtree-vivid-watercolor-textured-art-an-artistic-background-bursting-with-color-image_13896463.png"
                    gradientFrom="rgba(180, 81, 23, 0.6)"
                    gradientTo="rgba(238, 223, 141, 0.7)"
                    highlightColor="text-rose-700"
                    shadowColor="#663b1bff"
                    disabled={!selectedFile}
                />
            </div>
            {result && (
                <motion.div
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mt-10"
                >
                    <p className="font-bold text-lg">
                        Predicted: <span className="text-rose-700">{result.artist_name.replace(/_/g, ' ')}</span>
                    </p>
                    <p className='font-bold'>Score: <span className="text-rose-700">{(result.score * 100).toFixed(2)}%</span></p>
                </motion.div>
            )}
        </div>
    )
}

export default UploadSection
