import {CreateProcessModal} from './CreateProcessModal';
import {render, screen} from "@testing-library/react";


describe('CreateProcessModal component related tests', () => {
    it('CreateProcessModal should be not visible when isOpen is false', () => {
        render(<CreateProcessModal isOpen={false} onClose={jest.fn()} onSubmit={jest.fn()}/>)
        const modal = screen.getByTestId('modal')
        expect(modal.className.includes('d-none')).toBeTruthy();
    })

    it('CreateProcessModal should be  visible when isOpen is true', () => {
        render(<CreateProcessModal isOpen onClose={jest.fn()} onSubmit={jest.fn()}/>)
        const modal = screen.getByTestId('modal')
        expect(modal.className.includes('d-block')).toBeTruthy();
    })
})
