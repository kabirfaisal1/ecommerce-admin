'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

// StoreModal component to render a modal for creating a new store
export const StoreModal = () => {
	// Use the custom hook to manage the modal state
	const storeModal = useStoreModal();

	return (
		<Modal
			title='Create Store' // Title of the modal
			description='Add a new store to manage products and categories' // Description of the modal
			isOpen={storeModal.isOpen} // Modal open state
			onClose={storeModal.onClose} // Function to close the modal
		>
			Future Create store
		</Modal>
	);
};
