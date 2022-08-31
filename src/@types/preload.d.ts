import { API } from '../renderer/preload'

declare global {
    interface Window {api: typeof API}
}