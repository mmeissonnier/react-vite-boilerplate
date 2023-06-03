import { render } from '@testing-library/react'
import App from './App'

describe('test', () => {
    it('should render correctly', () => {
        const { container } = render(<App />)
        expect(container.querySelector('.card')).toBeDefined()
    })
})
