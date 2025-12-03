import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, FileSpreadsheet, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function FileUploader() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (isValidFile(droppedFile)) {
        setFile(droppedFile);
        processFile(droppedFile);
      }
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (isValidFile(selectedFile)) {
        setFile(selectedFile);
        processFile(selectedFile);
      }
    }
  };

  const isValidFile = (file: File) => {
    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    return validTypes.includes(file.type) || file.name.endsWith(".csv") || file.name.endsWith(".xlsx") || file.name.endsWith(".xls");
  };

  const processFile = (file: File) => {
    setIsProcessing(true);
    // Simular processamento
    setTimeout(() => {
      setIsProcessing(false);
      navigate("/app/dashboards");
    }, 3000);
  };

  const removeFile = () => {
    setFile(null);
    setIsProcessing(false);
  };

  if (isProcessing) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full gradient-bg animate-pulse flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-primary-foreground animate-spin" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-display text-xl font-semibold mb-2">Processando dados...</h3>
            <p className="text-muted-foreground">
              Nossa IA está analisando seu arquivo. Isso pode levar alguns segundos.
            </p>
          </div>
          <div className="w-full max-w-xs">
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full gradient-bg animate-pulse" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={cn(
        "relative rounded-2xl border-2 border-dashed p-12 transition-all duration-300 cursor-pointer",
        isDragging
          ? "border-primary bg-primary/5 scale-[1.02]"
          : "border-border hover:border-primary/50 hover:bg-secondary/30"
      )}
    >
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileSelect}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />

      {file ? (
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileSpreadsheet className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium">{file.name}</p>
            <p className="text-sm text-muted-foreground">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              removeFile();
            }}
            className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors"
          >
            <X className="w-5 h-5 text-destructive" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-1">
              Arraste e solte seu arquivo aqui
            </h3>
            <p className="text-muted-foreground text-sm">
              ou clique para selecionar • CSV, XLS, XLSX
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
