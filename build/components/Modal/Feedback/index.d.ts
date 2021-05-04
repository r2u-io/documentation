import React from 'react';
export interface FeedbackProps {
    onLike: () => void;
    onDislike: () => void;
    onOpen: () => void;
    onClose: () => void;
}
declare const FeedbackModal: React.FC<FeedbackProps>;
export default FeedbackModal;
