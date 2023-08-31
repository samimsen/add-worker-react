import Button from "./Button"
import Card from "./Card"

const ErrorModal = ({ error, onConfirm }) => {
    return (
        <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-screen z-50">
            <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"
                onClick={onConfirm}></div>
            <Card className="w-[36rem] p-0 z-20">
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

export default ErrorModal