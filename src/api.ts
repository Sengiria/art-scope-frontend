export interface PredictionResult {
  artist_name: string
  score: number
  filename?: string
}

export interface PredictionResponse {
    results: {
        result: PredictionResult;
    }
}

export const uploadImage = async (file: File): Promise<PredictionResponse> => {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch('https://sengiria-art-scope.hf.space/upload', {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    throw new Error(`Upload failed with status ${res.status}`)
  }

  return res.json()
}
