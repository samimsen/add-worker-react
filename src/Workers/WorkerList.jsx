import Card from "../UI/Card"

const WorkerList = ({ workers, setWorkers }) => {
    if (workers.length < 1) {
        return (
            <Card className="mt-10 flex items-center justify-center">
                <h1>No Worker Info</h1>
            </Card>
        )
    }

    const deleteWorker = (id) => {
        setWorkers(workers.filter((worker) => worker.id !== id))
        console.log(workers)
    }

    return (
        <Card className="mt-10">
            <ul>
                <li className="flex justify-between p-2">
                    <span className="font-bold">İsim</span>
                    <span className="font-bold">Maaş</span>
                </li>
                {workers.map((worker) => (
                    <li onClick={() => deleteWorker(worker.id)} key={worker.name} className="flex justify-between mt-2 cursor-pointer hover:shadow-xl p-2 transition-all">
                        <span>{worker.name}</span>
                        <span className="text-teal-700 font-medium">{worker.salary}₺</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default WorkerList