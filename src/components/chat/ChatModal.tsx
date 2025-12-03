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
      <ModalContent size="full" className="h-[85vh]">
        <ModalHeader>
          <ModalTitle>Chat com IA</ModalTitle>
        </ModalHeader>
        
        <div className="flex flex-1 h-[calc(100%-60px)] -mx-6 -mb-6">
          {/* Context Panel - Left Side */}
          <div className="w-1/3 border-r bg-secondary/20">
            <ContextPanel />
          </div>
          
          {/* Chat - Right Side */}
          <div className="flex-1 flex flex-col">
            <Chat />
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
