import Button from "./Button"
import Card from "./Card"
import ReactDOM from 'react-dom'

const Backdrop = ({ onConfirm }) => {
    return (
        <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
            onClick={onConfirm}></div>
    )
}

const ModalOverlay = ({ error, onConfirm }) => {
    return (
            <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-screen z-50">
                <Card className="w-[36rem] !p-0">
                    <header className="bg-red-700 p-4 text-white rounded-t-xl">
                        <h2 className="text-center text-xl">{error.title}</h2>
                    </header>
                    <section className="p-4">{error.message}</section>
                    <footer className="p-4 flex justify-end">
                        <Button onClick={onConfirm}>Tamam</Button>
                    </footer>
                </Card>
            </div>
    )
}

const ErrorModal = ({ error, onConfirm }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay error={error} onConfirm={onConfirm} />, document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal