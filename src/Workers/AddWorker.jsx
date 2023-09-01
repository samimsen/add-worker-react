import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"

const AddWorker = ({ setWorkers }) => {

    const [enteredName, setEnteredName] = useState("")
    const [enteredSalary, setEnteredSalary] = useState("")
    const [error, setError] = useState()

    const minimumSalary = 5000;

    const workerNameChangeHandler = (e) => {
        setEnteredName(e.target.value)
    }

    const workerSalaryChangeHandler = (e) => {
        setEnteredSalary(e.target.value)
    }

    const addWorkerHandler = (e) => {

        e.preventDefault()

        if (enteredName.length === 0) {
            setError({ title: "İsim alanı zorunludur", message: "Lütfen bir isim giriniz" })
            return
        }

        if (enteredSalary < minimumSalary) {
            setError({ title: "Maaş alanı zorunludur", message: `Lütfen ${minimumSalary} değerinden büyük bir maaş değeri giriniz` })
            return
        }

        const addedWorker = {
            id: Math.floor(Math.random() * 1000),
            name: enteredName,
            salary: enteredSalary
        }

        setWorkers(prevState => [addedWorker, ...prevState])

        setEnteredName("")
        setEnteredSalary("")
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal onConfirm={errorHandler} error={error} />}
            <Card className="mt-10">
                <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
                    <label
                        htmlFor="name"
                        className="font-medium">
                        Çalışan İsmi
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Çalışan ismi yazınız"
                        onChange={workerNameChangeHandler}
                        value={enteredName}
                    />
                    <label
                        htmlFor="salary"
                        className="font-medium">
                        Maaş miktarı
                    </label>
                    <input
                        type="number"
                        id="salary"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Maaş miktarı yazınız"
                        onChange={workerSalaryChangeHandler}
                        value={enteredSalary}
                    />
                    <Button
                        type="submit"
                        className="mt-2">
                        Ekle
                    </Button>
                </form>
            </Card>
        </>


    )
}

export default AddWorker