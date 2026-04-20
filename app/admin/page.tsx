"use client"

import { useState } from "react"
import { db, storage } from "@/lib/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2, Upload, CheckCircle2 } from "lucide-react"

const categories = [
  { id: "pre-birthday", label: "Pre Birthday Shoots" },
  { id: "baby", label: "Baby Shoots" },
  { id: "family", label: "Family Shoots" },
  { id: "maternity", label: "Maternity Shoots" },
]

export default function AdminUploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [category, setCategory] = useState<string>("")
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file || !category) {
      toast.error("Please select both an image and a category")
      return
    }

    try {
      setIsUploading(true)
      setProgress(0)

      // 1. Upload to Firebase Storage
      const storageRef = ref(storage, `gallery/${Date.now()}_${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(p)
        },
        (error) => {
          console.error("Upload error:", error)
          toast.error("Upload failed: " + error.message)
          setIsUploading(false)
        },
        async () => {
          // 2. Get Download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

          // 3. Save to Firestore
          await addDoc(collection(db, "gallery_images"), {
            src: downloadURL,
            category: category,
            alt: file.name.replace(/\.[^/.]+$/, "").split("-").join(" "),
            createdAt: serverTimestamp(),
          })

          toast.success("Image uploaded successfully!")
          setFile(null)
          setCategory("")
          setIsUploading(false)
          setProgress(0)
          
          // Clear input
          const fileInput = document.getElementById("image-upload") as HTMLInputElement
          if (fileInput) fileInput.value = ""
        }
      )
    } catch (error: any) {
      console.error("Error:", error)
      toast.error("Something went wrong: " + error.message)
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl border-rainbow-peach/20 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-primary via-rainbow-peach to-gold" />
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-serif font-bold text-center">Admin Panel</CardTitle>
          <CardDescription className="text-center">
            Upload new masterpieces to your gallery
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="category">Select Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Choose a category..." />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* File Selection */}
          <div className="space-y-2">
            <Label htmlFor="image-upload">Select Image</Label>
            <div className="relative group">
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all border-dashed py-8 h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-primary rounded-md" />
              {!file && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-muted-foreground">
                  <Upload className="w-8 h-8 mb-2 opacity-50" />
                  <span className="text-sm">Click or drag image here</span>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          {isUploading && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium text-muted-foreground">
                <span>Uploading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Upload Button */}
          <Button 
            onClick={handleUpload} 
            disabled={isUploading || !file || !category}
            className="w-full py-6 text-base font-medium shadow-lg hover:shadow-primary/25 transition-all group"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                {file && category ? (
                  <CheckCircle2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                ) : (
                  <Upload className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                )}
                Upload Masterpiece
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-4 italic">
            Images will be stored in Firebase and instantly visible on the gallery.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
