import { Chat } from "./Chat";
import { ContextPanel } from "./ContextPanel";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

interface ChatModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatModal({ open, onOpenChange }: ChatModalProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent size="full" className="h-[85vh] flex flex-col">
        <ModalHeader className="flex-shrink-0">
          <ModalTitle>Chat com IA</ModalTitle>
        </ModalHeader>
        
        <div className="flex flex-1 min-h-0 -mx-6 -mb-6 border-t">
          {/* Context Panel - Left Side */}
          <div className="w-2/5 border-r bg-secondary/20 flex flex-col min-h-0">
            <ContextPanel />
          </div>
          
          {/* Chat - Right Side */}
          <div className="flex-1 flex flex-col min-h-0">
            <Chat />
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
