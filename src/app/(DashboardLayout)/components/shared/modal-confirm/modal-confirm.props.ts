/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

export interface ModalConfirmProps {
    /**
     * A state to open the confirm modal
     */
    open: boolean

    /**
     * Confirm modal title
     */
    title?: string

    /**
     * Description text
     */
    description?: string

    /**
     * Confirm modal button text
     */
    confirm?: string

    /**
     * Cancel modal button text
     */
    cancel?:string

    /**
     * Function on close modal
     */
    onClose: () => void

    /**
     * Function on confirm modal
     */
    onConfirm: () => void
}
