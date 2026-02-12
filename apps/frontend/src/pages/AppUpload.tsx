import { AppHeader } from "@/components/layout/AppHeader";
import { FileUploader } from "@/components/upload/FileUploader";
import { StepsCard } from "@/components/upload/StepsCard";

const AppUpload = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Enviar Arquivo para Análise
            </h1>
            <p className="text-muted-foreground text-lg">
              Arraste seu arquivo CSV ou Excel e deixe nossa IA fazer a mágica
            </p>
          </div>

          {/* File Uploader */}
          <div className="mb-8">
            <FileUploader />
          </div>

          {/* Steps Card */}
          <StepsCard currentStep={0} />
        </div>
      </main>
    </div>
  );
};

export default AppUpload;
